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
import { getShipmentByTrackingNo, updateShipment } from "@/utils/localStorage";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

const OrderDetails = () => {
  const { trackingNo } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState<any>(null);
  const [status, setStatus] = useState("");
  const statusOptions = ["Order Placed", "Processing", "In Transit", "Delivered", "Return"];

  useEffect(() => {
    if (trackingNo) {
      const shipment = getShipmentByTrackingNo(trackingNo);
      if (shipment) {
        setOrder(shipment);
        setStatus(shipment.status);
      }
    }
  }, [trackingNo]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    updateShipment(trackingNo!, { status: newStatus });
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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold">Order Details</h1>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold"># {trackingNo}</p>
            <p className="text-gray-500">{order.createdDate}</p>
          </div>
          <div>
            <p className="font-semibold">Customer Name</p>
            <p>{order.customerName || order.receiverName}</p>

            {/* ✅ Paid Badge */}
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full w-fit">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Paid
            </div>
          </div>
          <div>
            <p className="font-semibold">Delivery Address</p>
            <p>{order.deliveryAddress || "No address provided"}</p>
          </div>
        </div>
      </div>

      {/* Grid of sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ✅ Updated Status Timeline */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold mb-4">Status Timeline</h2>
          <ol className="space-y-4">
            {statusOptions.map((stage, index) => {
              const currentIndex = statusOptions.indexOf(status);
              const isCompleted = index < currentIndex;
              const isCurrent = index === currentIndex;
              const isUpcoming = index > currentIndex;

              const getCircleColor = () => {
                if (isCompleted) return "bg-green-500 text-white";
                if (isCurrent) return "bg-blue-600 text-white";
                return "bg-gray-300 text-gray-600";
              };

              const getTextColor = () => {
                if (isCompleted || isCurrent) return "text-black font-medium";
                return "text-gray-500";
              };

              const getSubText = () => {
                if (isCompleted) return `Dec 15, ${9 + index}:00 AM`; // Example only
                if (isCurrent) return `In progress`;
                return `Pending`;
              };

              return (
                <li key={index} className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${getCircleColor()}`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className={getTextColor()}>{stage}</p>
                      <p className="text-sm text-gray-500">{getSubText()}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Update Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold mb-4">Update Status</h2>
          <select
            className="w-full border rounded-md px-3 py-2"
            value={status}
            onChange={handleStatusChange}
          >
            {statusOptions.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Button className="mt-4 w-full">Update Status</Button>
        </div>

        {/* Driver Assignment */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold mb-4">Driver Assignment</h2>
          <select className="w-full border rounded-md px-3 py-2 mb-3">
            <option>Select driver</option>
            <option>Mike Johnson</option>
            <option>Emma Carter</option>
          </select>
          <div className="text-sm text-gray-700 bg-gray-50 rounded-md p-3">
            <p>Currently Assigned: <strong>Mike Johnson</strong></p>
            <p>Vehicle: NYC-1234</p>
            <p>Current Load: 5 packages</p>
          </div>
        </div>

        {/* Warehouse Assignment */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold mb-4">Warehouse Assignment</h2>
          <select className="w-full border rounded-md px-3 py-2 mb-3">
            <option>Select warehouse</option>
            <option>Downtown Facility</option>
            <option>Main Distribution</option>
          </select>
          <div className="text-sm text-gray-700 bg-gray-50 rounded-md p-3">
            <p>Currently Assigned: <strong>Downtown Facility</strong></p>
            <p>Capacity: 75%</p>
            <p>Hours: 24/7</p>
          </div>
        </div>
      </div>

      {/* Parcel Info and Tracking */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold mb-4">Package Information</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Weight</p>
              <p>5.2 kg</p>
            </div>
            <div>
              <p className="font-semibold">Dimensions</p>
              <p>30×40×20 cm</p>
            </div>
            <div>
              <p className="font-semibold">Category</p>
              <p>Electronics</p>
            </div>
            <div>
              <p className="font-semibold">Special Handling</p>
              <p>Yes – Fragile Items</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold mb-4">Tracking History</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <div className="text-blue-600 font-medium">Package received at sorting facility</div>
              <div className="text-gray-500">Downtown Facility – Dec 15, 2:30 PM</div>
            </li>
            <li>
              <div className="text-blue-600 font-medium">Package out for delivery</div>
              <div className="text-gray-500">Local Distribution – Dec 15, 10:00 AM</div>
            </li>
            <li>
              <div className="text-blue-600 font-medium">Order processed</div>
              <div className="text-gray-500">Main Warehouse – Dec 15, 9:30 AM</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Products Section */}
      {order.items?.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="space-y-2">
            {order.items.map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-2 text-sm text-gray-700"
              >
                <p>{item.name} (x{item.qty})</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
