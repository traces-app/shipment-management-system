// import { Link } from "react-router-dom"; // Import Link for navigation
// import { Calendar, Home, Inbox, Search, Settings, ChevronRight } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import { useState } from "react";

// // Menu items with submenus.
// const items = [
//   {
//     title: "Home",
//     url: "/",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "/inbox",
//     icon: Inbox,
//     submenu: [
//       { title: "Unread", url: "/inbox/unread" },
//       { title: "Starred", url: "/inbox/starred" },
//     ],
//   },
//   {
//     title: "Calendar",
//     url: "/calendar",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "/search",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "/settings",
//     icon: Settings,
//     submenu: [
//       { title: "Profile", url: "/settings/profile" },
//       { title: "Preferences", url: "/settings/preferences" },
//     ],
//   },
// ];

// export function AppSidebar() {
//   const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

//   const toggleSubmenu = (title: string) => {
//     setOpenSubmenus((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   return (
//     <Sidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Traces</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <div key={item.title}>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton asChild>
//                       <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => item.submenu && toggleSubmenu(item.title)}>
//                         {/* ✅ Use Link instead of <a> */}
//                         <Link to={item.url} className="flex items-center">
//                           <item.icon />
//                           <span className="ml-2">{item.title}</span>
//                         </Link>
//                         {item.submenu && <ChevronRight className={`transition-transform ${openSubmenus[item.title] ? "rotate-90" : ""}`} />}
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>

//                   {/* ✅ Submenu items with proper navigation */}
//                   {item.submenu && openSubmenus[item.title] && (
//                     <div className="ml-4">
//                       {item.submenu.map((sub) => (
//                         <SidebarMenuItem key={sub.title}>
//                           <SidebarMenuButton asChild>
//                             <Link to={sub.url} className="flex items-center pl-4">
//                               <span>{sub.title}</span>
//                             </Link>
//                           </SidebarMenuButton>
//                         </SidebarMenuItem>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

import { NavLink } from "react-router-dom";

export const AppSidebar = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <aside className="w-[240px] p-4 border-r min-h-screen">
      <h2 className="text-xl font-bold mb-6">Navigation</h2>

      {/* Business Dashboard Links */}
      {user.role === "business" && (
        <>
          <NavLink to="/manual-order" className="block mb-2">Manual Order</NavLink>
          <NavLink to="/order-overview" className="block mb-2">Order Overview</NavLink>
          <NavLink to="/returns" className="block mb-2">Returns</NavLink>
          <NavLink to="/account" className="block mb-2">Account</NavLink>
        </>
      )}

      {/* Driver Dashboard Link */}
      {user.role === "driver" && (
        <NavLink to="/driver-dashboard" className="block mb-2">Driver Dashboard</NavLink>
      )}

      {/* Logout Button */}
      <button
        className="mt-8 text-sm text-red-600 hover:underline"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </aside>
  );
};
