import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface NavigationSection {
    id: string;
    title: string;
    url: string;
}

export interface NavigationPage {
    path: string;
    title: string;
    sections: NavigationSection[];
}

interface NavigationContextType {
    pages: NavigationPage[];
    registerPage: (path: string, title: string, sections: NavigationSection[]) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const [pages, setPages] = useState<NavigationPage[]>([]);

    const registerPage = (path: string, title: string, sections: NavigationSection[]) => {
        setPages(prev => {
            const existingIndex = prev.findIndex(page => page.path === path);
            const newPage = { path, title, sections };

            if (existingIndex >= 0) {
                const newPages = [...prev];
                newPages[existingIndex] = newPage;
                return newPages;
            } else {
                return [...prev, newPage];
            }
        });
    };

    return (
        <NavigationContext.Provider value={{ pages, registerPage }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}

// Hook to automatically register page sections
export function useRegisterPageSections(pageTitle: string) {
    const { registerPage } = useNavigation();
    const location = useLocation();

    useEffect(() => {
        // Wait for the page to render
        const timer = setTimeout(() => {
            const sections: NavigationSection[] = [];

            // Find all ComponentShowcase sections
            const showcaseElements = document.querySelectorAll('[data-component-showcase]');
            showcaseElements.forEach((element) => {
                const id = element.id;
                const titleElement = element.querySelector('[data-showcase-title]');
                const title = titleElement?.textContent?.trim() || '';

                if (id && title) {
                    sections.push({
                        id,
                        title,
                        url: `${location.pathname}#${id}`,
                    });
                }
            });

            // Look for props documentation
            const propsSection = document.getElementById('props-documentation');
            if (propsSection) {
                sections.push({
                    id: 'props-documentation',
                    title: 'Props Documentation',
                    url: `${location.pathname}#props-documentation`,
                });
            }

            registerPage(location.pathname, pageTitle, sections);
        }, 200);

        return () => clearTimeout(timer);
    }, [location.pathname, pageTitle, registerPage]);
}
