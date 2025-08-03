import * as React from "react";
import { BookOpen, Frame, LifeBuoy, Map, PieChart, Send } from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "valkoma-package/primitive";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: BookOpen,
      isActive: false,
      items: [],
    },
    {
      title: "Accordion",
      url: "/accordion",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Basic Accordion",
          url: "/accordion#basic-accordion",
        },
        {
          title: "Bordered Accordion",
          url: "/accordion#bordered-accordion",
        },
        {
          title: "Bottom Border Accordion",
          url: "/accordion#bottom-border-accordion",
        },
        {
          title: "Trigger Left Accordion",
          url: "/accordion#trigger-left-accordion",
        },
        {
          title: "Accordion with Icon",
          url: "/accordion#accordion-with-icon",
        },
        {
          title: "Multiple Accordions",
          url: "/accordion#multiple-accordions",
        },
        {
          title: "Styled Accordion",
          url: "/accordion#styled-accordion",
        },
        {
          title: "Disabled Accordion",
          url: "/accordion#disabled-accordion",
        },
        {
          title: "Custom Trigger Props",
          url: "/accordion#custom-trigger-accordion",
        },
        {
          title: "Dynamic Value",
          url: "/accordion#dynamic-value-accordion",
        },
        {
          title: "Nested Accordions",
          url: "/accordion#nested-accordion",
        },
        {
          title: "Props Documentation",
          url: "/accordion#props-documentation",
        },
      ],
    },
    {
      title: "Alert",
      url: "/alert",
      icon: BookOpen,
      items: [],
    },
    {
      title: "Button",
      url: "/button",
      icon: BookOpen,
      items: [],
    },
    {
      title: "Card",
      url: "/card",
      icon: BookOpen,
      items: [],
    },
  ],
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

export function AppSidebar({
  currentPage = "accordion",
  activeSection = null,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  currentPage?: string;
  activeSection?: string | null;
}) {
  // Update the navMain data with current state
  const updatedNavMain = data.navMain.map(item => ({
    ...item,
    isActive: item.url === `/${currentPage}`,
    items: item.items?.map(subItem => ({
      ...subItem,
      isActive: Boolean(activeSection && subItem.url.includes(`#${activeSection}`))
    }))
  }));

  return (
    <Sidebar variant="inset" {...props}>
      <div className="bg-background h-full rounded-xl shadow flex flex-col">
        <SidebarHeader className="flex-shrink-0">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">alleJKomal</span>
                    <span className="truncate text-xs">valkoma-package</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto pb-4">
            <NavMain items={updatedNavMain} />
          </div>
          <div className="flex-shrink-0">
            <NavProjects projects={data.projects} />
          </div>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
