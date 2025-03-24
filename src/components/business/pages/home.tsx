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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"; // Import Select Dropdown

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
//         <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
//         <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
//         <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
//         <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
//         <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
//         <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// }

// const Home = () => {
//   const projects = [
//     { name: "Project Alpha", start: "01/01/2024", end: "30/06/2024", owner: "John Michael", budget: "$50,000" },
//     { name: "Beta Campaign", start: "15/02/2024", end: "15/08/2024", owner: "Alexa Liras", budget: "$75,000" },
//     { name: "Campaign Delta", start: "01/03/2024", end: "01/09/2024", owner: "Laurent Perrier", budget: "$60,000" },
//     { name: "Gamma Outreach", start: "10/04/2024", end: "10/10/2024", owner: "Michael Levi", budget: "$80,000" },
//     { name: "Omega Strategy", start: "01/05/2024", end: "01/11/2024", owner: "Richard Gran", budget: "$100,000" },
//   ];

//   return (
//     <div className="p-10"> {/* No Sidebar here, Layout already includes it */}
//       <h1 className="mt-5 mb-6 text-3xl font-semibold">Dashboard</h1>

//       {/* ✅ Form Section with Inputs and Textarea */}
//       <div className="grid grid-cols-1 gap-12 mb-6 lg:grid-cols-2">
//         {/* Sender Information */}
//         <Card className="max-w-lg p-6">
//           <CardHeader className="p-0 text-left">
//             <CardTitle>Sender Information</CardTitle>
//             <CardDescription>Enter your email to get updates</CardDescription>
//           </CardHeader>

//           <CardContent className="p-0 space-y-4">
//             <div className="grid items-center gap-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input type="text" id="name" placeholder="Enter your name" />
//             </div>

//             <div className="grid items-center gap-1.5">
//               <Label htmlFor="email">Email</Label>
//               <Input type="email" id="email" placeholder="Enter your email" />
//             </div>

//             <TextareaWithLabel />
//           </CardContent>
//         </Card>

//         {/* Receiver Information */}
//         <Card className="max-w-lg p-6">
//           <CardHeader className="p-0 text-left">
//             <CardTitle>Receiver Information</CardTitle>
//             <CardDescription>Enter your email to get updates</CardDescription>
//           </CardHeader>

//           <CardContent className="p-0 space-y-4">
//             <div className="grid items-center gap-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input type="text" id="name" placeholder="Enter your name" />
//             </div>

//             <div className="grid items-center gap-1.5">
//               <Label htmlFor="email">Email</Label>
//               <Input type="email" id="email" placeholder="Enter your email" />
//             </div>

//             <TextareaWithLabel />
//           </CardContent>
//         </Card>
//       </div>

//       {/* Stats Cards Section */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {[{ title: "Total Revenue", icon: DollarSign, value: "$45,231.89", description: "+20.1% from last month" },
//         { title: "Subscriptions", icon: Users, value: "+2,350", description: "+180.1% from last month" },
//         { title: "Sales", icon: CreditCard, value: "+12,234", description: "+19% from last month" },
//         { title: "Active Now", icon: Activity, value: "+573", description: "+201 since last hour" }]
//           .map(({ title, icon: Icon, value, description }) => (
//             <Card key={title} className="p-6">
//               <CardHeader>
//                 <CardTitle>{title}</CardTitle>
//                 <Icon className="w-5 h-5 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{value}</div>
//                 <CardDescription>{description}</CardDescription>
//               </CardContent>
//               <CardFooter>
//                 <p className="text-xs text-muted-foreground">Updated recently</p>
//               </CardFooter>
//             </Card>
//           ))}
//       </div>

//       {/* Projects Table Section */}
//       <div className="mt-10">
//         <Card className="p-6">
//           <CardHeader>
//             <CardTitle>Projects</CardTitle>
//             <CardDescription>Ongoing campaigns and projects</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Table className="w-full border rounded-lg shadow-sm">
//               <TableHeader>
//                 <TableRow className="font-semibold text-gray-600 bg-gray-100">
//                   <TableHead className="p-4">Project Name</TableHead>
//                   <TableHead className="p-4">Start Date</TableHead>
//                   <TableHead className="p-4">End Date</TableHead>
//                   <TableHead className="p-4">Owner</TableHead>
//                   <TableHead className="p-4">Budget</TableHead>
//                   <TableHead className="p-4 text-right">Action</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {projects.map((project, index) => (
//                   <TableRow key={index} className="border-b hover:bg-gray-50">
//                     <TableCell className="p-4 font-semibold">{project.name}</TableCell>
//                     <TableCell className="p-4">{project.start}</TableCell>
//                     <TableCell className="p-4">{project.end}</TableCell>
//                     <TableCell className="p-4">{project.owner}</TableCell>
//                     <TableCell className="p-4">{project.budget}</TableCell>
//                     <TableCell className="p-4 text-right">
//                       <button className="font-semibold text-blue-600 hover:underline">Edit</button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Home;


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
// } from "@/components/ui/table";

// import { DollarSign, Users, CreditCard, Activity } from "lucide-react"; // Import icons

// const Home = () => {
//   const shipments = [
//     {
//       trackingNo: "TX 768 431",
//       sender: "Amazon.com, Inc",
//       receiver: "Lithika Damnod",
//       createdDate: "01/02/2025",
//       estimatedDelivery: "15/02/2025",
//       status: "Delivered",
//     },
//     {
//       trackingNo: "TX 768 432",
//       sender: "Amazon.com, Inc",
//       receiver: "Lithika Damnod",
//       createdDate: "01/02/2025",
//       estimatedDelivery: "15/02/2025",
//       status: "In Transit",
//     },
//     {
//       trackingNo: "TX 768 433",
//       sender: "Amazon.com, Inc",
//       receiver: "Lithika Damnod",
//       createdDate: "01/02/2025",
//       estimatedDelivery: "15/02/2025",
//       status: "Pending",
//     },
//     {
//       trackingNo: "TX 768 434",
//       sender: "Amazon.com, Inc",
//       receiver: "Lithika Damnod",
//       createdDate: "01/02/2025",
//       estimatedDelivery: "15/02/2025",
//       status: "Delayed",
//     },
//     {
//       trackingNo: "TX 768 435",
//       sender: "Amazon.com, Inc",
//       receiver: "Lithika Damnod",
//       createdDate: "01/02/2025",
//       estimatedDelivery: "15/02/2025",
//       status: "Delivered",
//     },
//   ];

//   return (
//     <div className="p-10">
//       <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

//       {/* Stats Cards Section */}
//       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         {[
//           { title: "Total Revenue", icon: DollarSign, value: "$45,231.89", description: "+20.1% from last month" },
//           { title: "Subscriptions", icon: Users, value: "+2,350", description: "+180.1% from last month" },
//           { title: "Sales", icon: CreditCard, value: "+12,234", description: "+19% from last month" },
//           { title: "Active Now", icon: Activity, value: "+573", description: "+201 since last hour" },
//         ].map(({ title, icon: Icon, value, description }) => (
//           <Card key={title} className="w-[300px] p-6">
//             <CardHeader>
//               <CardTitle>{title}</CardTitle>
//               <Icon className="w-5 h-5 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{value}</div>
//               <CardDescription>{description}</CardDescription>
//             </CardContent>
//             <CardFooter>
//               <p className="text-xs text-muted-foreground">Updated recently</p>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       {/* Table Container with Border, Curved Edges & Minimal Look */}
//       <div className="mt-10 w-full max-w-[100%] mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-300">
//         <Table className="w-full bg-white border-collapse rounded-lg">
//           {/* Table Header */}
//           <TableHeader className="text-lg font-semibold text-center text-gray-600 bg-gray-100 border-b border-gray-300">
//             <TableRow>
//               <TableHead className="px-4 py-3 text-center">Tracking No.</TableHead>
//               <TableHead className="px-4 py-3 text-center">Sender</TableHead>
//               <TableHead className="px-4 py-3 text-center">Receiver</TableHead>
//               <TableHead className="px-4 py-3 text-center">Shipment Created Date</TableHead>
//               <TableHead className="px-4 py-3 text-center">Estimated Delivery Date</TableHead>
//               <TableHead className="px-4 py-3 text-center">Status</TableHead>
//             </TableRow>
//           </TableHeader>

//           {/* Table Body */}
//           <TableBody>
//             {shipments.slice(0, 5).map((shipment, index) => (
//               <TableRow
//                 key={index}
//                 className="text-lg text-center border-t border-gray-200 hover:bg-gray-50"
//               >
//                 <TableCell className="px-4 py-3 font-semibold">{shipment.trackingNo}</TableCell>
//                 <TableCell className="px-4 py-3">{shipment.sender}</TableCell>
//                 <TableCell className="px-4 py-3">{shipment.receiver}</TableCell>
//                 <TableCell className="px-4 py-3">{shipment.createdDate}</TableCell>
//                 <TableCell className="px-4 py-3">{shipment.estimatedDelivery}</TableCell>
//                 <TableCell className="px-4 py-3">
//                   <span
//                     className={`px-3 py-1 text-base font-medium rounded-md ${
//                       shipment.status === "Delivered"
//                         ? "bg-green-100 text-green-600"
//                         : shipment.status === "In Transit"
//                         ? "bg-yellow-100 text-yellow-600"
//                         : shipment.status === "Pending"
//                         ? "bg-blue-100 text-blue-600"
//                         : "bg-red-100 text-red-600"
//                     }`}
//                   >
//                     {shipment.status}
//                   </span>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardDescription,
//   CardFooter,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { DollarSign, Users, CreditCard, Activity, Pencil } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const shipments = [
//     {
//       trackingNo: "TX 768 431",
//       senderName: "Amazon.com, Inc",
//       receiverName: "Lithika Damnod",
//       createdDate: "01/02/2025",
//       estimatedDelivery: "15/02/2025",
//       courier: "FedEx",
//       status: "Delivered",
//     },
//     {
//       trackingNo: "TX 768 432",
//       senderName: "Amazon.com, Inc",
//       receiverName: "Lithika Damnod",
//       createdDate: "01/02/2025",
//       estimatedDelivery: "15/02/2025",
//       courier: "DHL",
//       status: "In Transit",
//     },
//   ];

//   return (
//     <div className="p-10">
//       <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

//       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
//         {[
//           { title: "Total Revenue", icon: DollarSign, value: "$45,231.89", description: "+20.1% from last month" },
//           { title: "Subscriptions", icon: Users, value: "+2,350", description: "+180.1% from last month" },
//           { title: "Sales", icon: CreditCard, value: "+12,234", description: "+19% from last month" },
//           { title: "Active Now", icon: Activity, value: "+573", description: "+201 since last hour" },
//         ].map(({ title, icon: Icon, value, description }) => (
//           <Card key={title} className="p-6">
//             <CardHeader>
//               <CardTitle>{title}</CardTitle>
//               <Icon className="w-5 h-5 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{value}</div>
//               <CardDescription>{description}</CardDescription>
//             </CardContent>
//             <CardFooter>
//               <p className="text-xs text-muted-foreground">Updated recently</p>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <div className="overflow-x-auto border rounded-lg shadow-lg max-w-full">
//         <Table className="min-w-full text-base text-center">
//           <TableHeader className="bg-gray-100 text-gray-700 font-semibold">
//             <TableRow>
//               {["Shipping ID", "Sender", "Receiver", "Shipment Created Date", "Estimated Delivery Date", "Courier", "Status", "Details"].map((header) => (
//                 <TableHead key={header} className="text-center px-6">{header}</TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {shipments.map((order, index) => (
//               <TableRow key={`${order.trackingNo}-${index}`}>
//                 <TableCell className="px-6">{order.trackingNo}</TableCell>
//                 <TableCell className="px-6">{order.senderName}</TableCell>
//                 <TableCell className="px-6">{order.receiverName}</TableCell>
//                 <TableCell className="px-6">{order.createdDate}</TableCell>
//                 <TableCell className="px-6">{order.estimatedDelivery}</TableCell>
//                 <TableCell className="px-6">{order.courier}</TableCell>
//                 <TableCell className="px-6">{order.status}</TableCell>
//                 <TableCell className="px-6">
//                   <button
//                     onClick={() => navigate(`/order-details/${order.trackingNo}`)}
//                     className="text-black hover:underline"
//                   >
//                     <Pencil className="w-5 h-5" />
//                   </button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShipments } from "@/utils/localStorage";
import { Pencil } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const Home = () => {
  const [shipments, setShipments] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = () => setShipments(getShipments());
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {[
          { title: "Total Revenue", value: "$45,231.89" },
          { title: "Subscriptions", value: "+2,350" },
          { title: "Sales", value: "+12,234" },
          { title: "Active Now", value: "+573" },
        ].map(({ title, value }, i) => (
          <Card key={i} className="p-6">
            <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
            <CardContent><div className="text-2xl font-bold">{value}</div></CardContent>
            <CardFooter><CardDescription>Updated recently</CardDescription></CardFooter>
          </Card>
        ))}
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto border rounded-lg shadow-lg max-w-full">
        <Table className="min-w-full text-base text-center">
          <TableHeader className="bg-gray-100 text-gray-700 font-semibold">
            <TableRow>
              {["Shipping ID", "Sender", "Receiver", "Shipment Created Date", "Estimated Delivery Date", "Courier", "Status", "Details"].map((h) => (
                <TableHead key={h} className="text-center px-6">{h}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((order, index) => (
              <TableRow key={`${order.trackingNo}-${index}`}>
                <TableCell className="px-6">{order.trackingNo}</TableCell>
                <TableCell className="px-6">{order.senderName}</TableCell>
                <TableCell className="px-6">{order.receiverName}</TableCell>
                <TableCell className="px-6">{order.createdDate}</TableCell>
                <TableCell className="px-6">{order.estimatedDelivery}</TableCell>
                <TableCell className="px-6">{order.courier}</TableCell>
                <TableCell className="px-6">
                  <span className={`px-3 py-1 text-sm rounded-md font-medium ${
                    order.status === "Delivered" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="px-6">
                  <button onClick={() => navigate(`/order-details/${order.trackingNo}`)}>
                    <Pencil className="w-5 h-5 text-blue-600" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Home;


