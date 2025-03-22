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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShipments } from "@/utils/localStorage";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pencil } from "lucide-react";

const OrderOverview = () => {
  const navigate = useNavigate();
  const [shipments, setShipments] = useState<any[]>([]);

  useEffect(() => {
    const data = getShipments();
    setShipments(data);
  }, []);

  return (
    <div className="p-10">
      <h1 className="mb-6 text-3xl font-bold">Order Overview Page</h1>

      <div className="w-full max-w-[100%] mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <Table className="w-full bg-white border-collapse rounded-lg">
          <TableHeader className="text-lg font-semibold text-center text-gray-600 bg-gray-100 border-b border-gray-300">
            <TableRow>
              <TableHead className="px-4 py-3 text-center">Tracking No.</TableHead>
              <TableHead className="px-4 py-3 text-center">Sender</TableHead>
              <TableHead className="px-4 py-3 text-center">Receiver</TableHead>
              <TableHead className="px-4 py-3 text-center">Shipment Created Date</TableHead>
              <TableHead className="px-4 py-3 text-center">Estimated Delivery Date</TableHead>
              <TableHead className="px-4 py-3 text-center">Status</TableHead>
              <TableHead className="px-4 py-3 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {shipments.map((shipment, index) => (
              <TableRow key={index} className="text-lg text-center border-t border-gray-200 hover:bg-gray-50">
                <TableCell className="px-4 py-3 font-semibold">{shipment.trackingNo}</TableCell>
                <TableCell className="px-4 py-3">{shipment.senderName}</TableCell>
                <TableCell className="px-4 py-3">{shipment.receiverName}</TableCell>
                <TableCell className="px-4 py-3">{shipment.createdDate}</TableCell>
                <TableCell className="px-4 py-3">{shipment.estimatedDelivery}</TableCell>
                <TableCell className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-base font-medium rounded-md ${
                      shipment.status === "Delivered"
                        ? "bg-green-100 text-green-600"
                        : shipment.status === "In Transit"
                        ? "bg-yellow-100 text-yellow-600"
                        : shipment.status === "Pending"
                        ? "bg-blue-100 text-blue-600"
                        : shipment.status === "Review order"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {shipment.status}
                  </span>
                </TableCell>

                <TableCell className="px-4 py-3 text-center">
                  <button
                    className="p-2 text-blue-600 transition-colors duration-200 rounded-full hover:text-blue-800"
                    onClick={() => navigate(`/order-details/${shipment.trackingNo}`)}
                  >
                    <Pencil className="w-5 h-5" />
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


