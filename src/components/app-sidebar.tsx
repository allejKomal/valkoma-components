import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "valkoma-package/primitive";
import { BookOpen, Frame, LifeBuoy, Map, PieChart, Send } from "lucide-react";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import { useNavigation } from "@/context/navigation-context";
import { useLocation } from "react-router-dom";

// Static data that doesn't change
const staticData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

// Define the main pages structure
const mainPages = [
  { path: "/alert", title: "Alert", icon: BookOpen },
  { path: "/accordion", title: "Accordion", icon: BookOpen },
  { path: "/button", title: "Button", icon: BookOpen },
  { path: "/button-group", title: "Button Group", icon: BookOpen },
  { path: "/checkbox", title: "Checkbox", icon: BookOpen },
  { path: "/checkbox-group", title: "Checkbox Group", icon: BookOpen },
  { path: "/checkbox-hierarchical", title: "Checkbox Hierarchical", icon: BookOpen },
  { path: "/multi-select", title: "Multi Select", icon: BookOpen },
  { path: "/card", title: "Card", icon: BookOpen },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pages } = useNavigation();
  const location = useLocation();

  // Build navigation structure dynamically
  const navMain = mainPages.map((page) => {
    const registeredPage = pages.find((p) => p.path === page.path);

    return {
      title: page.title,
      url: page.path,
      icon: page.icon,
      isActive: page.path === location.pathname,
      items:
        registeredPage?.sections.map((section) => ({
          title: section.title,
          url: section.url,
          isActive: location.hash === `#${section.id}`,
        })) || [],
    };
  });

  return (
    <Sidebar variant="inset" {...props}>
      <div className="bg-background h-full rounded-xl shadow flex flex-col">
        <SidebarHeader className="flex-shrink-0">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <BookOpen className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Valkoma</span>
                    <span className="truncate text-xs">Component Library</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="flex-1 overflow-hidden">
          <div className="overflow-y-auto">
            <NavMain items={navMain} />
          </div>
          <NavProjects projects={staticData.projects} />
          <NavSecondary items={staticData.navSecondary} className="mt-auto" />
        </SidebarContent>
        <SidebarFooter className="flex-shrink-0">
          <NavUser user={staticData.user} />
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
