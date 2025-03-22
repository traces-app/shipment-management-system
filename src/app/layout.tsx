// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         {/* <SidebarTrigger /> */}
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }

import { SidebarProvider } from "@/components/ui/sidebar";
import BusinessSidebar from "@/components/business/BusinessSidebar";
import DriverSidebar from "@/components/driver/DriverSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <SidebarProvider>
      {/* 🔁 Show sidebar based on role */}
      {user.role === "driver" ? <DriverSidebar /> : <BusinessSidebar />}
      <main>{children}</main>
    </SidebarProvider>
  );
}

