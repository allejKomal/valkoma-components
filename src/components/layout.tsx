import {
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "valkoma-package/primitive";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
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
        <div className="flex-1 overflow-y-auto h-full">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}