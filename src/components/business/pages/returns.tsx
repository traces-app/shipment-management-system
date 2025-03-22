// Home.tsx

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const Home = () => {
  const shipments = [
    {
      trackingNo: "TX 768 431",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delivered",
    },
    {
      trackingNo: "TX 768 432",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "In Transit",
    },
    {
      trackingNo: "TX 768 433",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Pending",
    },
    {
      trackingNo: "TX 768 434",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delayed",
    },
    {
      trackingNo: "TX 768 435",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delivered",
    },
    {
      trackingNo: "TX 768 434",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delayed",
    },
    {
      trackingNo: "TX 768 435",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delivered",
    },
    {
      trackingNo: "TX 768 434",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delayed",
    },
    {
      trackingNo: "TX 768 435",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delivered",
    },
    {
      trackingNo: "TX 768 434",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delayed",
    },
    {
      trackingNo: "TX 768 435",
      sender: "Amazon.com, Inc",
      receiver: "Lithika Damnod",
      createdDate: "01/02/2025",
      estimatedDelivery: "15/02/2025",
      status: "Delivered",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="mb-6 text-3xl font-bold">Order Overview Page</h1>

      {/* Table Container with Border, Curved Edges & Minimal Look */}
      <div className="w-full max-w-[100%] mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <Table className="w-full bg-white border-collapse rounded-lg">
          {/* Table Header */}
          <TableHeader className="text-lg font-semibold text-center text-gray-600 bg-gray-100 border-b border-gray-300">
            <TableRow>
              <TableHead className="px-4 py-3 text-center">Tracking No.</TableHead>
              <TableHead className="px-4 py-3 text-center">Sender</TableHead>
              <TableHead className="px-4 py-3 text-center">Receiver</TableHead>
              <TableHead className="px-4 py-3 text-center">Shipment Created Date</TableHead>
              <TableHead className="px-4 py-3 text-center">Estimated Delivery Date</TableHead>
              <TableHead className="px-4 py-3 text-center">Status</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {shipments.map((shipment, index) => (
              <TableRow
                key={index}
                className="text-lg text-center border-t border-gray-200 hover:bg-gray-50"
              >
                <TableCell className="px-4 py-3 font-semibold">{shipment.trackingNo}</TableCell>
                <TableCell className="px-4 py-3">{shipment.sender}</TableCell>
                <TableCell className="px-4 py-3">{shipment.receiver}</TableCell>
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
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {shipment.status}
                  </span>
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


// import { useEffect, useState } from "react";
// import {
//   getShipments,
//   updateShipment,
//   assignReturnToDriver,
// } from "@/utils/localStorage";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";

// // ✅ Define return shipment type
// type ReturnShipment = {
//   trackingNo: string;
//   receiverName: string;
//   returnStatus: string;
//   returnAssignedTo?: string;
// };

// const Returns = () => {
//   const [returns, setReturns] = useState<ReturnShipment[]>([]);
//   const [selectedDriver, setSelectedDriver] = useState<{ [key: string]: string }>({});

//   useEffect(() => {
//     refreshList();
//   }, []);

//   const refreshList = () => {
//     const data = getShipments().filter(
//       (s: ReturnShipment & { isReturned?: boolean }) =>
//         s.isReturned === true && s.returnStatus !== "Received"
//     );
//     setReturns(data);
//   };

//   const handleAccept = (trackingNo: string) => {
//     updateShipment(trackingNo, { returnStatus: "Accepted" });
//     refreshList();
//   };

//   const handleAssignDriver = (trackingNo: string) => {
//     const driver = selectedDriver[trackingNo];
//     if (driver) {
//       assignReturnToDriver(trackingNo, driver);
//       refreshList();
//     }
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Return Requests</h1>

//       {returns.length === 0 ? (
//         <p className="text-muted-foreground">No return requests found.</p>
//       ) : (
//         <div className="space-y-6">
//           {returns.map((ret, index) => (
//             <Card key={`${ret.trackingNo}-${index}`} className="p-6 border shadow-sm">
//               <div className="mb-4 space-y-1">
//                 <p><strong>Tracking No:</strong> {ret.trackingNo}</p>
//                 <p><strong>Receiver:</strong> {ret.receiverName}</p>
//                 <p><strong>Status:</strong> {ret.returnStatus}</p>
//                 {ret.returnAssignedTo && (
//                   <p><strong>Assigned To:</strong> {ret.returnAssignedTo}</p>
//                 )}
//               </div>

//               {/* Accept Request */}
//               {ret.returnStatus === "Requested" && (
//                 <Button onClick={() => handleAccept(ret.trackingNo)}>Accept Return</Button>
//               )}

//               {/* Assign Driver */}
//               {ret.returnStatus === "Accepted" && (
//                 <div className="flex flex-col gap-4 mt-4">
//                   <div>
//                     <Label htmlFor={`driver-${ret.trackingNo}`}>Assign Driver</Label>
//                     <Input
//                       id={`driver-${ret.trackingNo}`}
//                       value={selectedDriver[ret.trackingNo] || ""}
//                       placeholder="Enter driver name"
//                       onChange={(e) =>
//                         setSelectedDriver((prev) => ({
//                           ...prev,
//                           [ret.trackingNo]: e.target.value,
//                         }))
//                       }
//                     />
//                   </div>
//                   <Button
//                     onClick={() => handleAssignDriver(ret.trackingNo)}
//                     disabled={!selectedDriver[ret.trackingNo]}
//                   >
//                     Assign
//                   </Button>
//                 </div>
//               )}

//               {ret.returnStatus === "Picked Up" && (
//                 <p className="text-blue-600 mt-2">Return is with driver.</p>
//               )}
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Returns;
