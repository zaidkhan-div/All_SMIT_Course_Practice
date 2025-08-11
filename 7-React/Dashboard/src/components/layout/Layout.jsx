import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./App-Sidebar"
import { ModeToggle } from "../mode-toggle";
import ProfileMenu from "../profile-menu";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen">
        <div className="p-2 flex justify-between items-center w-full border-2">
          <SidebarTrigger />
          <div className="gap-2 flex items-center justify-center">
            <ModeToggle />
            <ProfileMenu />
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
