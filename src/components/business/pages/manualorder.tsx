// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Card, CardContent } from "@/components/ui/card";

// const SelectScrollable = () => {
//   return (
//     <Select>
//       <SelectTrigger className="w-full">
//         <SelectValue placeholder="Select" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="box">Box</SelectItem>
//         <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
//         <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
//         <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
//         <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
//         <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// };

// const Home = () => {
//   return (
//     <div className="p-10">
//       <h1 className="mb-6 text-2xl font-bold">Manual Order Entry</h1>

//       {/* Single Card for All Sections */}
//       <Card className="p-8">
//         <CardContent className="space-y-8">
//           {/* Sender & Recipient Information */}
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//             {/* Sender Information */}
//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold">Sender Information</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="sender-name" className="mb-2">Full Name</Label>
//                   <Input type="text" id="sender-name" placeholder="Enter full name" />
//                 </div>
//                 <div>
//                   <Label htmlFor="sender-email" className="mb-2">Email</Label>
//                   <Input type="email" id="sender-email" placeholder="Enter email" />
//                 </div>
//               </div>
//               <div>
//                 <Label htmlFor="sender-address" className="mb-2">Address</Label>
//                 <Textarea id="sender-address" placeholder="Enter address" />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="sender-phone" className="mb-2">Phone</Label>
//                   <Input type="text" id="sender-phone" placeholder="Enter phone" />
//                 </div>
//               </div>
//             </div>

//             {/* Recipient Information */}
//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold">Recipient Information</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="recipient-name" className="mb-2">Full Name</Label>
//                   <Input type="text" id="recipient-name" placeholder="Enter full name" />
//                 </div>
//                 <div>
//                   <Label htmlFor="recipient-email" className="mb-2">Email</Label>
//                   <Input type="email" id="recipient-email" placeholder="Enter email" />
//                 </div>
//               </div>
//               <div>
//                 <Label htmlFor="recipient-address" className="mb-2">Address</Label>
//                 <Textarea id="recipient-address" placeholder="Enter address" />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="recipient-phone" className="mb-2">Phone</Label>
//                   <Input type="text" id="recipient-phone" placeholder="Enter phone" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Package Details & Tracking Information */}
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//             {/* Package Details */}
//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold">Package Details</h2>
//               <div>
//                 <Label htmlFor="package-type" className="mb-2">Package Type</Label>
//                 <SelectScrollable />
//               </div>
//               <div>
//                 <Label htmlFor="package-weight" className="mb-2">Weight (kg)</Label>
//                 <Input type="text" id="package-weight" placeholder="Enter weight" />
//               </div>
//               <div>
//                 <Label htmlFor="package-dimensions" className="mb-2">Dimensions (cm)</Label>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div>
//                     <Label htmlFor="dimension-length" className="mb-2">Length</Label>
//                     <Input type="text" id="dimension-length" placeholder="Length" />
//                   </div>
//                   <div>
//                     <Label htmlFor="dimension-width" className="mb-2">Width</Label>
//                     <Input type="text" id="dimension-width" placeholder="Width" />
//                   </div>
//                   <div>
//                     <Label htmlFor="dimension-height" className="mb-2">Height</Label>
//                     <Input type="text" id="dimension-height" placeholder="Height" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tracking Information */}
//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold">Tracking Information</h2>
//               <div>
//                 <Label htmlFor="service-type" className="mb-2">Service Type</Label>
//                 <SelectScrollable />
//               </div>
//               <div>
//                 <Label htmlFor="tracking-number" className="mb-2">Tracking Number</Label>
//                 <Input type="text" id="tracking-number" placeholder="TP-20240215-001" />
//               </div>
//             </div>
//           </div>

//           {/* Buttons Section (Now Using Regular Buttons) */}
//           <div className="flex justify-end gap-4 pt-6">
//             {/* Cancel Button */}
//             <button className="px-4 py-2 text-black border border-gray-300 rounded-md hover:bg-gray-100">
//               Cancel
//             </button>

//             {/* Create Order Button */}
//             <button className="px-4 py-2 text-black bg-white rounded-md hover:bg-blue-700">
//               Create Order
//             </button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { addShipment } from "@/utils/localStorage"; // ✅ import your localStorage util

const ManualOrder = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    senderName: "",
    senderEmail: "",
    senderAddress: "",
    senderPhone: "",
    receiverName: "",
    receiverEmail: "",
    receiverAddress: "",
    receiverPhone: "",
    packageType: "",
    weight: "",
    dimensions: { length: "", width: "", height: "" },
    serviceType: "",
    trackingNo: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    if (id.startsWith("dimension-")) {
      const dimKey = id.split("-")[1];
      setForm((prev) => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [dimKey]: value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = () => {
    const newShipment = {
      ...form,
      trackingNo: form.trackingNo || `TX-${Date.now()}`,
      createdDate: new Date().toLocaleDateString("en-GB"),
      estimatedDelivery: "28/03/2025",
      status: "Review order",
    };

    addShipment(newShipment); // ✅ Save to localStorage
    navigate("/order-overview"); // ✅ Redirect to table
  };

  return (
    <div className="p-10">
      <h1 className="mb-6 text-2xl font-bold">Manual Order Entry</h1>

      <Card className="p-8">
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Sender Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Sender Information</h2>
              <Label>Full Name</Label>
              <Input id="senderName" onChange={handleChange} />
              <Label>Email</Label>
              <Input id="senderEmail" onChange={handleChange} />
              <Label>Address</Label>
              <Textarea id="senderAddress" onChange={handleChange} />
              <Label>Phone</Label>
              <Input id="senderPhone" onChange={handleChange} />
            </div>

            {/* Receiver Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Recipient Information</h2>
              <Label>Full Name</Label>
              <Input id="receiverName" onChange={handleChange} />
              <Label>Email</Label>
              <Input id="receiverEmail" onChange={handleChange} />
              <Label>Address</Label>
              <Textarea id="receiverAddress" onChange={handleChange} />
              <Label>Phone</Label>
              <Input id="receiverPhone" onChange={handleChange} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Package Details</h2>
              <Label>Package Type</Label>
              <Input id="packageType" onChange={handleChange} />
              <Label>Weight</Label>
              <Input id="weight" onChange={handleChange} />
              <Label>Dimensions</Label>
              <div className="grid grid-cols-3 gap-4">
                <Input id="dimension-length" placeholder="L" onChange={handleChange} />
                <Input id="dimension-width" placeholder="W" onChange={handleChange} />
                <Input id="dimension-height" placeholder="H" onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Tracking Info</h2>
              <Label>Service Type</Label>
              <Input id="serviceType" onChange={handleChange} />
              <Label>Tracking Number</Label>
              <Input id="trackingNo" onChange={handleChange} placeholder="Optional" />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <button className="px-4 py-2 border" onClick={() => navigate("/")}>Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Create Order</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManualOrder;
