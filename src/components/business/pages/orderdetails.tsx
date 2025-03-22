// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// // Mock Order Data (Replace with API Call Later)
// const mockOrders: Record<string, any> = {
//   "TX 768 431": {
//     sender: "Amazon.com, Inc",
//     receiver: "Lithika Damnod",
//     createdDate: "01/02/2025",
//     estimatedDelivery: "15/02/2025",
//     status: "Review order",
//     items: [
//       { name: "Macbook Pro 14 Inch", price: "$1,659.25", sku: "Mac-1000", qty: 1 },
//       { name: "APPLE 32'' Pro Display XDR", price: "$5,848.77", sku: "Mac-5006", qty: 1 },
//     ],
//   },
// };

// const OrderDetails = () => {
//   const { trackingNo } = useParams(); // Get order ID from URL
//   const navigate = useNavigate();

//   // Get Order Details
//   const order = trackingNo && mockOrders[trackingNo];

//   // Handle case where order doesn't exist
//   if (!order) {
//     return (
//       <div className="p-10">
//         <h1 className="mb-6 text-2xl font-bold">Order Not Found</h1>
//         <Button onClick={() => navigate(-1)}>Go Back</Button>
//       </div>
//     );
//   }

//   const [status, setStatus] = useState(order.status);

//   // Status Options
//   const statusOptions = ["Review order", "Packed", "Shipped", "Delivered"];

//   // Handle Status Change
//   const handleStatusUpdate = () => {
//     const currentIndex = statusOptions.indexOf(status);
//     if (currentIndex < statusOptions.length - 1) {
//       setStatus(statusOptions[currentIndex + 1]);
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="mb-6 text-2xl font-bold">Order #{trackingNo}</h1>

//       {/* Order Details */}
//       <Card className="p-6 mb-6">
//         <CardContent>
//           <p className="text-lg font-semibold">Sender: {order.sender}</p>
//           <p className="text-lg">Receiver: {order.receiver}</p>
//           <p className="text-lg">Order Date: {order.createdDate}</p>
//           <p className="text-lg">Estimated Delivery: {order.estimatedDelivery}</p>
//         </CardContent>
//       </Card>

//       {/* Shipment Progress */}
//       <Card className="p-6 mb-6">
//         <h2 className="mb-4 text-xl font-semibold">Shipment Progress</h2>
//         <Progress value={(statusOptions.indexOf(status) / (statusOptions.length - 1)) * 100} />
//         <p className="mt-4 text-lg">Current Status: <strong>{status}</strong></p>
//       </Card>

//       {/* Order Items */}
//       <Card className="p-6 mb-6">
//         <h2 className="mb-4 text-xl font-semibold">Products</h2>
//         {order.items.map((item: any, index: number) => (
//           <div key={index} className="flex justify-between py-2 border-b">
//             <p>{item.name} (x{item.qty})</p>
//             <p>{item.price}</p>
//           </div>
//         ))}
//       </Card>

//       {/* Update Order Status */}
//       <div className="flex justify-between">
//         <Button onClick={() => navigate(-1)} variant="outline">Back</Button>
//         <Button onClick={handleStatusUpdate} disabled={status === "Delivered"}>
//           {status === "Delivered" ? "Order Completed" : "Update Status"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getShipments } from "@/utils/localStorage";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import { Pencil } from "lucide-react";

// const OrderOverview = () => {
//   const navigate = useNavigate();
//   const [shipments, setShipments] = useState<any[]>([]);

//   useEffect(() => {
//     const data = getShipments();
//     setShipments(data);
//   }, []);

//   return (
//     <div className="p-10">
//       <h1 className="mb-6 text-3xl font-bold">Order Overview Page</h1>

//       <div className="w-full max-w-[100%] mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-300">
//         <Table className="w-full bg-white border-collapse rounded-lg">
//           <TableHeader className="text-lg font-semibold text-center text-gray-600 bg-gray-100 border-b border-gray-300">
//             <TableRow>
//               <TableHead className="px-4 py-3 text-center">Tracking No.</TableHead>
//               <TableHead className="px-4 py-3 text-center">Sender</TableHead>
//               <TableHead className="px-4 py-3 text-center">Receiver</TableHead>
//               <TableHead className="px-4 py-3 text-center">Shipment Created Date</TableHead>
//               <TableHead className="px-4 py-3 text-center">Estimated Delivery Date</TableHead>
//               <TableHead className="px-4 py-3 text-center">Status</TableHead>
//               <TableHead className="px-4 py-3 text-center">Actions</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {shipments.map((shipment, index) => (
//               <TableRow key={index} className="text-lg text-center border-t border-gray-200 hover:bg-gray-50">
//                 <TableCell className="px-4 py-3 font-semibold">{shipment.trackingNo}</TableCell>
//                 <TableCell className="px-4 py-3">{shipment.senderName}</TableCell>
//                 <TableCell className="px-4 py-3">{shipment.receiverName}</TableCell>
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
//                         : shipment.status === "Review order"
//                         ? "bg-purple-100 text-purple-600"
//                         : "bg-red-100 text-red-600"
//                     }`}
//                   >
//                     {shipment.status}
//                   </span>
//                 </TableCell>

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

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getShipmentByTrackingNo, updateShipment } from "@/utils/localStorage";

const OrderDetails = () => {
  const { trackingNo } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState<any>(null);
  const [status, setStatus] = useState("");

  const statusOptions = ["Review order", "Packed", "Shipped", "Delivered"];

  useEffect(() => {
    if (trackingNo) {
      const shipment = getShipmentByTrackingNo(trackingNo);
      if (shipment) {
        setOrder(shipment);
        setStatus(shipment.status);
      }
    }
  }, [trackingNo]);

  const handleStatusUpdate = () => {
    const currentIndex = statusOptions.indexOf(status);
    const nextStatus = statusOptions[currentIndex + 1];
    updateShipment(trackingNo!, { status: nextStatus });
    setStatus(nextStatus);
  };

  const handleReturnRequest = () => {
    updateShipment(trackingNo!, {
      isReturned: true,
      returnStatus: "Requested",
      returnDate: new Date().toLocaleDateString("en-GB"),
    });
    navigate("/order-overview");
  };

  if (!order) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6">Order Not Found</h1>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Order #{trackingNo}</h1>

      {/* Shipment Info */}
      <Card className="p-6 mb-6">
        <CardContent>
          <p className="text-lg font-semibold">Sender: {order.senderName}</p>
          <p className="text-lg">Receiver: {order.receiverName}</p>
          <p className="text-lg">Order Date: {order.createdDate}</p>
          <p className="text-lg">Estimated Delivery: {order.estimatedDelivery}</p>
        </CardContent>
      </Card>

      {/* Shipment Progress */}
      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipment Progress</h2>
        <Progress value={(statusOptions.indexOf(status) / (statusOptions.length - 1)) * 100} />
        <p className="mt-4 text-lg">Current Status: <strong>{status}</strong></p>
      </Card>

      {/* Products (Optional for now) */}
      {order.items?.length > 0 && (
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          {order.items.map((item: any, index: number) => (
            <div key={index} className="flex justify-between py-2 border-b">
              <p>{item.name} (x{item.qty})</p>
              <p>{item.price}</p>
            </div>
          ))}
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button onClick={() => navigate(-1)} variant="outline">Back</Button>

        {/* Show return request button only if Delivered and not already returned */}
        {status === "Delivered" && !order?.isReturned && (
          <Button onClick={handleReturnRequest}>Request Return</Button>
        )}

        {/* Update status (for admin testing) */}
        <Button onClick={handleStatusUpdate} disabled={status === "Delivered"}>
          {status === "Delivered" ? "Order Completed" : "Update Status"}
        </Button>
      </div>
    </div>
  );
};

export default OrderDetails;
