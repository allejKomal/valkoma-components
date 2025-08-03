import { useState, useEffect } from "react";
import {
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "valkoma-package/primitive";
import { AppSidebar } from "./app-sidebar";
import Home from "@/pages/home";
import AccordionHome from "@/pages/accordion-home";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("accordion");
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Handle navigation from sidebar
  useEffect(() => {
    const handleNavigation = (event: MessageEvent) => {
      if (event.data.type === "navigate") {
        const { path, target } = event.data;

        if (path === "/accordion") {
          setCurrentPage("accordion");
        } else if (path === "/") {
          setCurrentPage("home");
        } else if (path === "/alert") {
          setCurrentPage("alert");
        } else if (path === "/button") {
          setCurrentPage("button");
        } else if (path === "/card") {
          setCurrentPage("card");
        }

        if (target) {
          setScrollTarget(target);
          setActiveSection(target);
        } else {
          setActiveSection(null);
        }
      }
    };

    window.addEventListener("message", handleNavigation);
    return () => window.removeEventListener("message", handleNavigation);
  }, []);

  // Handle scroll to target
  useEffect(() => {
    if (scrollTarget && currentPage === "accordion") {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setScrollTarget(null);
      }, 100);
    }
  }, [scrollTarget, currentPage]);

  // Set default active section for accordion page
  useEffect(() => {
    if (currentPage === "accordion" && !activeSection) {
      setActiveSection("basic-accordion");
    }
  }, [currentPage, activeSection]);

  // Handle scroll-based highlighting for accordion sections
  useEffect(() => {
    if (currentPage !== "accordion") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the middle of viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sectionId !== activeSection) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observe all accordion sections
    const sections = [
      "basic-accordion",
      "bordered-accordion",
      "bottom-border-accordion",
      "trigger-left-accordion",
      "accordion-with-icon",
      "multiple-accordions",
      "styled-accordion",
      "disabled-accordion",
      "custom-trigger-accordion",
      "dynamic-value-accordion",
      "nested-accordion",
      "props-documentation",
    ];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [currentPage, activeSection]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "accordion":
        return <AccordionHome />;
      case "alert":
        return (
          <div className="p-8 text-center">Alert Component - Coming Soon</div>
        );
      case "button":
        return (
          <div className="p-8 text-center">Button Component - Coming Soon</div>
        );
      case "card":
        return (
          <div className="p-8 text-center">Card Component - Coming Soon</div>
        );
      default:
        return <AccordionHome />;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar currentPage={currentPage} activeSection={activeSection} />
      <SidebarInset className="flex flex-col h-[calc(100vh-16px)]">
        <header className="flex h-10 shrink-0 items-center bg-background rounded-2xl gap-2">
          <div className="flex items-center px-2 bg-transparent">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
        <div className="flex-1 overflow-y-auto h-full">{renderPage()}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
