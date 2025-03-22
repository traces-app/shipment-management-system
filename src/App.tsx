// import React from "react";
// import Layout from "./app/layout";
// import { ThemeProvider } from "@/components/theme-provider";

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card"; // Import ShadCN Card components

// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table"; // Import ShadCN Table components


// import { DollarSign, Users, CreditCard, Activity } from "lucide-react"; // Import icons

// import { Input } from "@/components/ui/input"; // Import Input component
// import { Label } from "@/components/ui/label"; // Import Label component
// import { Textarea } from "@/components/ui/textarea"; // Import Textarea component
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"; // Import Select Dropdown


// export function InputWithLabel() {
//   return (
//     <div className="grid grid-cols-1 gap-12 lg:grid-cols-2"> {/* ✅ Change `gap-12` to adjust space between two forms */}
      
//       {/* Left Side Form (Sender Information) */}
//       <Card className="max-w-lg p-6">
//         <CardHeader className="p-0 text-left">
//           <CardTitle>Sender Information</CardTitle>
//           <CardDescription>Enter your email to get updates</CardDescription>
//         </CardHeader>

//         <CardContent className="p-0 space-y-4">
//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="name">Name</Label>
//             <Input type="text" id="name" placeholder="Enter your name" />
//           </div>

//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="email">Email</Label>
//             <Input type="email" id="email" placeholder="Enter your email" />
//           </div>

//           <TextareaWithLabel />

//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="email2">Email</Label>
//             <Input type="email" id="email2" placeholder="Enter your email" />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Right Side Form (EXACT DUPLICATE) */}
//       <Card className="max-w-lg p-6">
//         <CardHeader className="p-0 text-left">
//           <CardTitle>Receiver Information</CardTitle> {/* ✅ Duplicate title if needed */}
//           <CardDescription>Enter your email to get updates</CardDescription>
//         </CardHeader>

//         <CardContent className="p-0 space-y-4">
//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="name">Name</Label>
//             <Input type="text" id="name" placeholder="Enter your name" />
//           </div>

//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="email">Email</Label>
//             <Input type="email" id="email" placeholder="Enter your email" />
//           </div>

//           <TextareaWithLabel />

//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="email2">Email</Label>
//             <Input type="email" id="email2" placeholder="Enter your email" />
//           </div>
//         </CardContent>
//       </Card>
      
//       {/* Left Side Form (Sender Information) */}
//       <Card className="max-w-lg p-6">
//         <CardHeader className="p-0 text-left">
//           <CardTitle>Package Details</CardTitle>
//           {/* <CardDescription>Enter your email to get updates</CardDescription> */}
//         </CardHeader>

//         <CardContent className="p-0 space-y-4">
//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="name">Weight(kg)</Label>
//             <Input type="text" id="name" placeholder="Enter your name" />
//           </div>

//           <div className="grid items-center gap-1.5">
//             <Label htmlFor="email">Dimensions(cm)</Label>
//             <Input type="email" id="email" placeholder="Lenght * Width * Height" />
//           </div>

//            {/* ✅ Added Timezone Dropdown */}
//            <div className="grid items-center gap-1.5">
//             <Label htmlFor="timezone">Timezone</Label>
//             <SelectScrollable />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// // ✅ Textarea Component (Used in Both Forms)
// export function TextareaWithLabel() {
//   return (
//     <div className="grid items-center gap-1.5">
//       <Label htmlFor="message">Address</Label>
//       <Textarea placeholder="Type your address here." id="message" />
//     </div>
//   );
// }

// // ✅ Dropdown Component
// export function SelectScrollable() {
//   return (
//     <Select>
//       <SelectTrigger className="w-[280px]">
//         <SelectValue placeholder="Select a timezone" />
//       </SelectTrigger>
//       <SelectContent>
//           <SelectItem value="est">Box</SelectItem>
//           <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
//           <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
//           <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
//           <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
//           <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// }



// function App() {
//   const projects = [
//     { name: "Project Alpha", start: "01/01/2024", end: "30/06/2024", owner: "John Michael", budget: "$50,000" },
//     { name: "Beta Campaign", start: "15/02/2024", end: "15/08/2024", owner: "Alexa Liras", budget: "$75,000" },
//     { name: "Campaign Delta", start: "01/03/2024", end: "01/09/2024", owner: "Laurent Perrier", budget: "$60,000" },
//     { name: "Gamma Outreach", start: "10/04/2024", end: "10/10/2024", owner: "Michael Levi", budget: "$80,000" },
//     { name: "Omega Strategy", start: "01/05/2024", end: "01/11/2024", owner: "Richard Gran", budget: "$100,000" },
//   ];

//   return (
//     <Layout>
//       <div className="p-10">
//         <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

//         {/* ✅ Form Section with Inputs and Textarea */}
//         <div className="mb-6">
//           <InputWithLabel />
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Total Revenue */}
//           <Card className="p-6">
//             <CardHeader>
//               <CardTitle>Total Revenue</CardTitle>
//               <DollarSign className="w-5 h-5 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">$45,231.89</div>
//               <CardDescription>+20.1% from last month</CardDescription>
//             </CardContent>
//             <CardFooter>
//               <p className="text-xs text-muted-foreground">Updated recently</p>
//             </CardFooter>
//           </Card>

//           {/* Subscriptions */}
//           <Card className="p-6">
//             <CardHeader>
//               <CardTitle>Subscriptions</CardTitle>
//               <Users className="w-5 h-5 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+2,350</div>
//               <CardDescription>+180.1% from last month</CardDescription>
//             </CardContent>
//             <CardFooter>
//               <p className="text-xs text-muted-foreground">Last updated 1h ago</p>
//             </CardFooter>
//           </Card>

//           {/* Sales */}
//           <Card className="p-6">
//             <CardHeader>
//               <CardTitle>Sales</CardTitle>
//               <CreditCard className="w-5 h-5 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+12,234</div>
//               <CardDescription>+19% from last month</CardDescription>
//             </CardContent>
//             <CardFooter>
//               <p className="text-xs text-muted-foreground">Latest sales trends</p>
//             </CardFooter>
//           </Card>

//           {/* Active Now */}
//           <Card className="p-6">
//             <CardHeader>
//               <CardTitle>Active Now</CardTitle>
//               <Activity className="w-5 h-5 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+573</div>
//               <CardDescription>+201 since last hour</CardDescription>
//             </CardContent>
//             <CardFooter>
//               <p className="text-xs text-muted-foreground">Real-time activity</p>
//             </CardFooter>
//           </Card>
//         </div>

//         {/* Projects Table Section */}
//         <div className="mt-10">
//           <Card className="p-6">
//             <CardHeader>
//               <CardTitle>Projects</CardTitle>
//               <CardDescription>Ongoing campaigns and projects</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table className="w-full border rounded-lg shadow-sm">
//                 <TableHeader>
//                   <TableRow className="font-semibold text-gray-600 bg-gray-100">
//                     <TableHead className="p-4">Project Name</TableHead>
//                     <TableHead className="p-4">Start Date</TableHead>
//                     <TableHead className="p-4">End Date</TableHead>
//                     <TableHead className="p-4">Owner</TableHead>
//                     <TableHead className="p-4">Budget</TableHead>
//                     <TableHead className="p-4 text-right">Action</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {projects.map((project, index) => (
//                     <TableRow key={index} className="border-b hover:bg-gray-50">
//                       <TableCell className="p-4 font-semibold">{project.name}</TableCell>
//                       <TableCell className="p-4">{project.start}</TableCell>
//                       <TableCell className="p-4">{project.end}</TableCell>
//                       <TableCell className="p-4">{project.owner}</TableCell>
//                       <TableCell className="p-4">{project.budget}</TableCell>
//                       <TableCell className="p-4 text-right">
//                         <button className="font-semibold text-blue-600 hover:underline">Edit</button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";

// Business pages
import Home from "./components/business/pages/home";
import ManualOrder from "./components/business/pages/manualorder";
import OrderOverview from "./components/business/pages/orderoverview";
import Returns from "./components/business/pages/returns";
import Account from "./components/business/pages/account";
import OrderDetails from "./components/business/pages/orderdetails";

// Driver pages
import DriverDashboard from "./components/driver/pages/driverdashboard";
import DriverDeliveries from "./components/driver/pages/deliveries";
import DriverOrderDetails from "./components/driver/pages/orderdetails";

import Layout from "./app/layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔓 Public Route */}
        <Route path="/" element={<AuthPage />} />

        {/* 🔒 Protected Routes wrapped with Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                {/* ✅ Business Routes */}
                <Route path="/home" element={<Home />} />
                <Route path="/manual-order" element={<ManualOrder />} />
                <Route path="/order-overview" element={<OrderOverview />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/account" element={<Account />} />
                <Route path="/order-details/:trackingNo" element={<OrderDetails />} />

                {/* ✅ Driver Routes */}
                <Route path="/driver-dashboard" element={<DriverDashboard />} />
                <Route path="/driver-deliveries" element={<DriverDeliveries />} />
                <Route path="/driver-order-details" element={<DriverOrderDetails />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


