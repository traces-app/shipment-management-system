// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import { Pencil } from "lucide-react"; // Import Edit Icon
// import { useNavigate } from "react-router-dom"; // ✅ Import Navigation Hook

// const OrderOverview = () => {
//   const navigate = useNavigate(); // ✅ Hook for Navigation

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
//       <h1 className="mb-6 text-3xl font-bold">Order Overview Page</h1>

//       {/* Table Container */}
//       <div className="w-full max-w-[100%] mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-300">
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
//               <TableHead className="px-4 py-3 text-center">Actions</TableHead> {/* ✅ New Column */}
//             </TableRow>
//           </TableHeader>

//           {/* Table Body */}
//           <TableBody>
//             {shipments.map((shipment, index) => (
//               <TableRow key={index} className="text-lg text-center border-t border-gray-200 hover:bg-gray-50">
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

//                 {/* Actions Column - Edit Button */}
//                 <TableCell className="px-4 py-3 text-center">
//                   <button
//                     className="p-2 text-blue-600 transition-colors duration-200 rounded-full hover:text-blue-800"
//                     onClick={() => navigate(`/order-details/${shipment.trackingNo}`)}
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

// export default OrderOverview;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getShipments } from "@/utils/localStorage";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { Pencil } from "lucide-react";

// const OrderOverview = () => {
//   const [shipments, setShipments] = useState<any[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = getShipments().filter((s: any) => !s.isReturned);
//     setShipments(data);
//   }, []);

//   return (
//     <div className="p-10">
//       <h1 className="mb-6 text-3xl font-bold">Order Overview</h1>
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

// export default OrderOverview;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShipments } from "@/utils/localStorage";
import { Pencil } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const OrderOverview = () => {
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
      <h1 className="text-3xl font-bold mb-6">Order Overview</h1>
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

export default OrderOverview;

