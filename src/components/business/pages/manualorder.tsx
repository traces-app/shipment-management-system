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

// "use client";

// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { addShipment } from "@/utils/localStorage";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const ManualOrder = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     senderName: "",
//     senderEmail: "",
//     senderAddress: "",
//     senderPhone: "",
//     receiverName: "",
//     receiverEmail: "",
//     receiverAddress: "",
//     receiverPhone: "",
//     packageType: "",
//     weight: "",
//     dimensions: { length: "", width: "", height: "" },
//     serviceType: "",
//     trackingNo: "",
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;
//     if (id.startsWith("dimension-")) {
//       const dimKey = id.split("-")[1];
//       setForm((prev) => ({
//         ...prev,
//         dimensions: {
//           ...prev.dimensions,
//           [dimKey]: value,
//         },
//       }));
//     } else {
//       setForm((prev) => ({ ...prev, [id]: value }));
//     }
//   };

//   const validate = () => {
//     const requiredFields = [
//       "senderName",
//       "senderEmail",
//       "senderAddress",
//       "senderPhone",
//       "receiverName",
//       "receiverEmail",
//       "receiverAddress",
//       "receiverPhone",
//       "packageType",
//       "weight",
//       "serviceType",
//     ];

//     const newErrors: { [key: string]: string } = {};

//     requiredFields.forEach((field) => {
//       if (!form[field as keyof typeof form]) {
//         newErrors[field] = "This field is required.";
//       }
//     });

//     const { length, width, height } = form.dimensions;
//     if (!length || !width || !height) {
//       newErrors.dimensions = "All dimensions (L × W × H) are required.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validate()) return;

//     const newShipment = {
//       ...form,
//       trackingNo: form.trackingNo || `TX-${Date.now()}`,
//       createdDate: new Date().toLocaleDateString("en-GB"),
//       estimatedDelivery: "28/03/2025",
//       status: "Review order",
//     };

//     addShipment(newShipment);
//     navigate("/order-overview");
//   };

//   return (
//     <div className="p-10 space-y-8">
//       <h1 className="text-2xl font-bold">Manual Order Entry</h1>

//       {/* Sender & Receiver - Side by Side */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Sender Info */}
//         <Card className="w-[100%] h-[600px]">
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold">Sender Information</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <Label>Full Name *</Label>
//               <Input id="senderName" value={form.senderName} onChange={handleChange} />
//               {errors.senderName && <p className="text-sm text-red-500">{errors.senderName}</p>}
//             </div>
//             <div>
//               <Label>Email *</Label>
//               <Input id="senderEmail" value={form.senderEmail} onChange={handleChange} />
//               {errors.senderEmail && <p className="text-sm text-red-500">{errors.senderEmail}</p>}
//             </div>
//             <div>
//               <Label>Address *</Label>
//               <Textarea id="senderAddress" value={form.senderAddress} onChange={handleChange} />
//               {errors.senderAddress && <p className="text-sm text-red-500">{errors.senderAddress}</p>}
//             </div>
//             <div>
//               <Label>Phone *</Label>
//               <Input id="senderPhone" value={form.senderPhone} onChange={handleChange} />
//               {errors.senderPhone && <p className="text-sm text-red-500">{errors.senderPhone}</p>}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Receiver Info */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold">Receiver Information</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <Label>Full Name *</Label>
//               <Input id="receiverName" value={form.receiverName} onChange={handleChange} />
//               {errors.receiverName && <p className="text-sm text-red-500">{errors.receiverName}</p>}
//             </div>
//             <div>
//               <Label>Email *</Label>
//               <Input id="receiverEmail" value={form.receiverEmail} onChange={handleChange} />
//               {errors.receiverEmail && <p className="text-sm text-red-500">{errors.receiverEmail}</p>}
//             </div>
//             <div>
//               <Label>Address *</Label>
//               <Textarea id="receiverAddress" value={form.receiverAddress} onChange={handleChange} />
//               {errors.receiverAddress && <p className="text-sm text-red-500">{errors.receiverAddress}</p>}
//             </div>
//             <div>
//               <Label>Phone *</Label>
//               <Input id="receiverPhone" value={form.receiverPhone} onChange={handleChange} />
//               {errors.receiverPhone && <p className="text-sm text-red-500">{errors.receiverPhone}</p>}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Package Info - Full Width */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-xl font-semibold">Package & Tracking Details</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div>
//             <Label>Package Type *</Label>
//             <Input id="packageType" value={form.packageType} onChange={handleChange} />
//             {errors.packageType && <p className="text-sm text-red-500">{errors.packageType}</p>}
//           </div>
//           <div>
//             <Label>Weight (kg) *</Label>
//             <Input id="weight" value={form.weight} onChange={handleChange} />
//             {errors.weight && <p className="text-sm text-red-500">{errors.weight}</p>}
//           </div>
//           <div>
//             <Label>Dimensions (cm) *</Label>
//             <div className="grid grid-cols-3 gap-4">
//               <Input
//                 id="dimension-length"
//                 placeholder="L"
//                 value={form.dimensions.length}
//                 onChange={handleChange}
//               />
//               <Input
//                 id="dimension-width"
//                 placeholder="W"
//                 value={form.dimensions.width}
//                 onChange={handleChange}
//               />
//               <Input
//                 id="dimension-height"
//                 placeholder="H"
//                 value={form.dimensions.height}
//                 onChange={handleChange}
//               />
//             </div>
//             {errors.dimensions && <p className="text-sm text-red-500">{errors.dimensions}</p>}
//           </div>
//           <div>
//             <Label>Service Type *</Label>
//             <Input id="serviceType" value={form.serviceType} onChange={handleChange} />
//             {errors.serviceType && <p className="text-sm text-red-500">{errors.serviceType}</p>}
//           </div>
//           <div>
//             <Label>Tracking Number</Label>
//             <Input
//               id="trackingNo"
//               placeholder="Optional - will be auto-generated if left empty"
//               value={form.trackingNo}
//               onChange={handleChange}
//             />
//             <p className="text-xs text-muted-foreground">Leave empty to auto-generate one.</p>
//           </div>
//           {/* Package Type */}
// <div>
//   <Label>Package Type *</Label>
//   <Select
//     value={form.packageType}
//     onValueChange={(value) => setForm((prev) => ({ ...prev, packageType: value }))}
//   >
//     <SelectTrigger className="w-full">
//       <SelectValue placeholder="Select a package type" />
//     </SelectTrigger>
//     <SelectContent>
//       <SelectItem value="Box">Box</SelectItem>
//       <SelectItem value="Envelope">Envelope</SelectItem>
//       <SelectItem value="Tube">Tube</SelectItem>
//     </SelectContent>
//   </Select>
//   {errors.packageType && <p className="text-sm text-red-500">{errors.packageType}</p>}
// </div>

// {/* Courier Service Type (renamed from "Service Type") */}
// <div>
//   <Label>Courier Service *</Label>
//   <Select
//     value={form.serviceType}
//     onValueChange={(value) => setForm((prev) => ({ ...prev, serviceType: value }))}
//   >
//     <SelectTrigger className="w-full">
//       <SelectValue placeholder="Select a courier service" />
//     </SelectTrigger>
//     <SelectContent>
//       <SelectItem value="Standard">Standard</SelectItem>
//       <SelectItem value="Express">Express</SelectItem>
//       <SelectItem value="Overnight">Overnight</SelectItem>
//     </SelectContent>
//   </Select>
//   {errors.serviceType && <p className="text-sm text-red-500">{errors.serviceType}</p>}
// </div>
//         </CardContent>
//       </Card>
    

//       {/* Action Buttons */}
//       <div className="flex justify-end gap-4 pt-4">
//         <button
//           className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
//           onClick={() => navigate("/")}
//         >
//           Cancel
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           onClick={handleSubmit}
//         >
//           Create Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManualOrder;

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// // ✅ Reusable Form Field Component
// interface FormFieldProps {
//   label: string;
//   placeholder: string;
//   value: string;
//   required?: boolean;
//   hint?: string;
// }

// const FormField: React.FC<FormFieldProps> = ({
//   label,
//   placeholder,
//   value,
//   required = false,
//   hint,
// }) => {
//   const [inputValue, setInputValue] = useState(value);
//   const [error, setError] = useState("");

//   const handleBlur = () => {
//     if (required && inputValue.trim() === "") {
//       setError(`${label} is required.`);
//     } else {
//       setError("");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-1.5 w-full">
//       <div className="flex flex-col gap-1 w-full">
//         <Label className="text-dark-grey font-bold text-[14px] leading-[150%]">
//           {label}
//         </Label>
//         {hint && (
//           <span className="text-xs text-colors-neutral-400 italic">{hint}</span>
//         )}
//       </div>
//       <Input
//         className={`h-[52px] px-4 py-4 rounded-xl border-[1.6px] ${
//           error
//             ? "border-red-500"
//             : "border-colors-neutral-200 focus:border-colors-cerulean-blue-600"
//         } focus:ring-0`}
//         placeholder={placeholder}
//         defaultValue={value}
//         onChange={(e) => setInputValue(e.target.value)}
//         onBlur={handleBlur}
//       />
//       {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
//     </div>
//   );
// };

// // ✅ New: Dimension Field Component
// interface DimensionFieldProps {
//   label: string;
//   required?: boolean;
//   hint?: string;
// }

// const DimensionField: React.FC<DimensionFieldProps> = ({
//   label,
//   required = false,
//   hint,
// }) => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");

//   const handleBlur = () => {
//     if (required && value.trim() === "") {
//       setError(`${label} is required.`);
//     } else {
//       setError("");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-1.5 w-full">
//       {hint && (
//         <span className="text-xs text-colors-neutral-400 italic">{hint}</span>
//       )}
//       <Input
//         className={`h-[52px] px-4 py-4 rounded-xl border-[1.6px] ${
//           error
//             ? "border-red-500"
//             : "border-colors-neutral-200 focus:border-colors-cerulean-blue-600"
//         } focus:ring-0 font-bold text-colors-neutral-800`}
//         placeholder={label}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={handleBlur}
//       />
//       {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
//     </div>
//   );
// };

// // ✅ Data
// const senderInfo = {
//   title: "Sender Information",
// };

// const receiverInfo = {
//   title: "Receiver Information",
// };

// const packageInfo = {
//   title: "Package & Tracking Details",
//   dimensions: [
//     { label: "Lenght",},
//     { label: "Width",},
//     { label: "Height",},
//   ],
// };

// // ✅ Main Container
// const Container = () => {
//   return (
//     <main className="flex flex-col items-start gap-[22px] p-8">
//       <header className="flex flex-col items-start gap-2">
//         <h1 className="text-[#2a2a2a] text-[24px] leading-[130%] font-semibold">
//           Manual Order Entry
//         </h1>
//       </header>

//       <div className="flex items-start gap-[22px] w-full">
//         {/* Sender Info */}
//         <Card className="w-[600px] rounded-3xl border-colors-neutral-100">
//           <CardHeader className="pb-0">
//             <CardTitle className="text-[22px] text-colors-neutral-800 font-semibold leading-[130%]">
//               {senderInfo.title}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-col gap-4 pt-0">
//             <FormField label="Full Name" placeholder="Enter your name" value="" required />
//             <FormField label="Address" placeholder="Enter your address" value="" required />
//             <div className="flex gap-4 w-full">
//               <FormField label="Email" placeholder="Enter your email" value="" required />
//               <FormField label="Telephone No." placeholder="Enter your phone number" value="" required />
//             </div>
//           </CardContent>
//         </Card>

//         {/* Package Info */}
//         <div className="flex flex-col flex-1 gap-4">
//           <Card className="rounded-3xl border-colors-neutral-100">
//             <CardHeader className="pb-0">
//               <CardTitle className="text-[22px] text-colors-neutral-800 font-semibold leading-[130%]">
//                 {packageInfo.title}
//               </CardTitle>
//             </CardHeader>

//             <CardContent className="flex flex-col gap-4 pt-0">
//               {/* Courier Service */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <Label className="text-dark-grey font-bold text-[14px] leading-[150%]">
//                   Courier Service
//                 </Label>
//                 <Select>
//                   <SelectTrigger className="h-[52px] px-4 py-4 rounded-xl border-[1.6px] border-colors-neutral-200">
//                     <SelectValue placeholder="Select a courier service" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="option1">Option 1</SelectItem>
//                     <SelectItem value="option2">Option 2</SelectItem>
//                     <SelectItem value="option3">Option 3</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Package Type */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <Label className="text-dark-grey font-bold text-[14px] leading-[150%]">
//                   Package Type
//                 </Label>
//                 <Select>
//                   <SelectTrigger className="h-[52px] px-4 py-4 rounded-xl border-[1.6px] border-colors-neutral-200">
//                     <SelectValue placeholder="Select a package type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="option1">Option 1</SelectItem>
//                     <SelectItem value="option2">Option 2</SelectItem>
//                     <SelectItem value="option3">Option 3</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Weight */}
//               <FormField label="Weight(kg)" placeholder="Package weight" value="" required />

//               {/* Dimensions */}
//               <div>
//                 <Label className="text-dark-grey font-bold text-[14px] mb-1.5 block">
//                   Dimensions(cm)
//                 </Label>
//                 <div className="flex gap-4 w-full">
//                   {packageInfo.dimensions.map((dim, index) => (
//                     <DimensionField
//                       key={index}
//                       label={dim.label}
//                       required
//                     />
//                   ))}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Buttons */}
//           <div className="flex justify-end gap-1 w-full">
//             <Button
//               variant="outline"
//               className="bg-colors-background-light border-colors-cerulean-blue-600 text-colors-cerulean-blue-600 font-bold px-6 py-3 h-auto rounded-xl"
//             >
//               Discard Changes
//             </Button>
//             <Button className="bg-colors-cerulean-blue-600 text-white font-bold px-6 py-3 h-auto rounded-xl">
//               Save&nbsp;&nbsp;Changes
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Receiver Info */}
//       <Card className="w-[600px] rounded-3xl border-colors-neutral-100">
//         <CardHeader className="pb-0">
//           <CardTitle className="text-[22px] text-colors-neutral-800 font-semibold leading-[130%]">
//             {receiverInfo.title}
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col gap-4 pt-0">
//           <FormField label="Full Name" placeholder="Enter your name" value="" required />
//           <FormField label="Address" placeholder="Enter your address" value="" required />
//           <div className="flex gap-4 w-full">
//             <FormField label="Email" placeholder="Enter your email" value="" required />
//             <FormField label="Telephone No." placeholder="Enter your phone number" value="" required />
//           </div>
//         </CardContent>
//       </Card>
//     </main>
//   );
// };

// export default Container;

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import React from "react";

// // Data for form sections
// const senderReceiverFields = [
//   {
//     id: "fullName",
//     label: "Full Name",
//     placeholder: "Enter your name",
//     required: true,
//   },
//   { id: "address", label: "Address", placeholder: "Enter your address" },
//   { id: "email", label: "Email", placeholder: "Enter your email" },
//   {
//     id: "telephone",
//     label: "Telephone No.",
//     placeholder: "Enter your phone number",
//   },
// ];

// const courierFields = [
//   {
//     id: "courierService",
//     label: "Courier Service",
//     placeholder: "Select a courier service",
//     type: "select",
//   },
//   {
//     id: "packageType",
//     label: "Package Type",
//     placeholder: "Select a package type",
//     type: "select",
//     section: "Package & Tracking Details",
//   },
//   {
//     id: "weight",
//     label: "Weight(kg)",
//     placeholder: "Package weight",
//     section: "Package & Tracking Details",
//   },
//   {
//     id: "dimensions",
//     label: "Dimensions(cm)",
//     placeholders: ["L", "W", "H"],
//     section: "Package & Tracking Details",
//   },
//   {
//     id: "paymentMethod",
//     label: "Payment Method",
//     placeholder: "Select a payment method",
//     type: "select",
//     section: "Payment Information",
//   },
//   {
//     id: "paymentStatus",
//     label: "Payment Status",
//     placeholder: "Select a payment status",
//     type: "select",
//     section: "Payment Information",
//   },
//   {
//     id: "totalCost",
//     label: "Total Cost",
//     placeholder: "Enter total cost",
//     section: "Payment Information",
//   },
// ];

// export default function Container() {
//   return (
//     <main className="flex flex-col items-start gap-[22px] p-8">
//       <header className="flex flex-col items-start gap-2">
//         <h1 className="text-[40px] font-bold text-[#2a2a2a] leading-[52px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica]">
//           Manual Order Entry
//         </h1>
//       </header>

//       <div className="flex items-start gap-[22px] w-full">
//         {/* Sender and Receiver Information Card */}
//         <Card className="w-[600px] rounded-3xl border-colors-neutral-100">
//           <CardContent className="flex flex-col gap-6 p-6">
//             {/* Sender Information Section */}
//             <section className="flex flex-col items-start gap-0">
//               <h2 className="text-[22px] font-bold text-colors-neutral-800 leading-[28.6px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica]">
//                 Sender Information
//               </h2>
//             </section>

//             {/* Sender Form Fields */}
//             <div className="flex flex-col gap-4 w-full">
//               {senderReceiverFields.slice(0, 2).map((field) => (
//                 <div
//                   key={`sender-${field.id}`}
//                   className="flex flex-col gap-1.5 w-full"
//                 >
//                   <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                     {field.label}
//                   </label>
//                   <Input
//                     placeholder={field.placeholder}
//                     required
//                     className={`h-[52px] rounded-xl ${
//                       field.id === "fullName"
//                         ? "border-[1.6px] border-colors-cerulean-blue-600"
//                         : "border-[1.6px] border-colors-neutral-200"
//                     }`}
//                   />
//                 </div>
//               ))}

//               <div className="flex gap-4 w-full">
//                 {senderReceiverFields.slice(2).map((field) => (
//                   <div
//                     key={`sender-${field.id}`}
//                     className="flex-1 flex flex-col gap-1.5"
//                   >
//                     <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                       {field.label}
//                     </label>
//                     <Input
//                       placeholder={field.placeholder}
//                       required
//                       className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Receiver Information Section */}
//             <section className="flex flex-col items-start gap-2">
//               <h2 className="text-[22px] font-bold text-colors-neutral-800 leading-[28.6px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica]">
//                 Receiver Information
//               </h2>
//             </section>

//             {/* Receiver Form Fields */}
//             <div className="flex flex-col gap-4 w-full">
//               {senderReceiverFields.slice(0, 2).map((field) => (
//                 <div
//                   key={`receiver-${field.id}`}
//                   className="flex flex-col gap-1.5 w-full"
//                 >
//                   <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                     {field.label}
//                   </label>
//                   <Input
//                     placeholder={field.placeholder}
//                     required
//                     className={`h-[52px] rounded-xl ${
//                       field.id === "fullName"
//                         ? "border-[1.6px] border-colors-cerulean-blue-600"
//                         : "border-[1.6px] border-colors-neutral-200"
//                     }`}
//                   />
//                 </div>
//               ))}
//               <div className="flex gap-4 w-full">
//                 {senderReceiverFields.slice(2).map((field) => (
//                   <div
//                     key={`receiver-${field.id}`}
//                     className="flex-1 flex flex-col gap-1.5"
//                   >
//                     <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                       {field.label}
//                     </label>
//                     <Input
//                       placeholder={field.placeholder}
//                       required
//                       className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Courier and Payment Details Card */}
//         <div className="flex-1 flex flex-col gap-4">
//           <Card className="rounded-3xl border-colors-neutral-100">
//             <CardContent className="flex flex-col gap-4 p-6">
//               {/* Courier Details Section */}
//               <section className="flex flex-col gap-2 w-full">
//                 <h2 className="text-[22px] font-bold text-colors-neutral-800-duplicate leading-[28.6px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica]">
//                   Courier Details
//                 </h2>
//               </section>

//               {/* Courier Service Field */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                   Courier Service
//                 </label>
//                 <Select>
//                   <SelectTrigger
//                     className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                     aria-required="true"
//                   >
//                     <SelectValue placeholder="Select a courier service" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="option1">DHL</SelectItem>
//                     <SelectItem value="option2">UPS</SelectItem>
//                     <SelectItem value="option3">Option 3</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Package & Tracking Details Section */}
//               <section className="flex flex-col gap-2 w-full">
//                 <h2 className="text-[22px] font-bold text-colors-neutral-800-duplicate leading-[28.6px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica]">
//                   Package &amp; Tracking Details
//                 </h2>
//               </section>

//               {/* Package Type Field */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                   Package Type
//                 </label>
//                 <Select>
//                   <SelectTrigger
//                     className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                     aria-required="true"
//                   >
//                     <SelectValue placeholder="Select a package type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="option1">Box</SelectItem>
//                     <SelectItem value="option2">Enveolpe</SelectItem>
//                     <SelectItem value="option3">Barel</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Weight Field */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                   Weight(kg)
//                 </label>
//                 <Input
//                   placeholder="Package weight"
//                   required
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                 />
//               </div>

//               {/* Dimensions Fields */}
//               <div className="flex gap-4 w-full">
//                 <div className="flex-1 flex flex-col gap-1.5">
//                   <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                     Dimensions(cm)
//                   </label>
//                   <Input
//                     placeholder="L"
//                     required
//                     className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   />
//                 </div>
//                 <div className="flex-1 flex flex-col gap-1.5">
//                   <div className="h-6"></div>
//                   <Input
//                     placeholder="W"
//                     required
//                     className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   />
//                 </div>
//                 <div className="flex-1 flex flex-col gap-1.5">
//                   <div className="h-6"></div>
//                   <Input
//                     placeholder="H"
//                     required
//                     className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   />
//                 </div>
//               </div>

//               {/* Payment Information Section */}
//               <section className="flex flex-col gap-2 w-full">
//                 <h2 className="text-[22px] font-bold text-colors-neutral-800-duplicate leading-[28.6px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica]">
//                   Payment Information
//                 </h2>
//               </section>

//               {/* Payment Method Field */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                   Payment Method
//                 </label>
//                 <Select>
//                   <SelectTrigger
//                     className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                     aria-required="true"
//                   >
//                     <SelectValue placeholder="Select a payment method" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="option1">Visa/Master</SelectItem>
//                     <SelectItem value="option2">KOKO</SelectItem>
//                     <SelectItem value="option3">Cash on Delivery</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Payment Status Field */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                   Payment Status
//                 </label>
//                 <Select>
//                   <SelectTrigger
//                     className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                     aria-required="true"
//                   >
//                     <SelectValue placeholder="Select a payment status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="option1">Paid</SelectItem>
//                     <SelectItem value="option2">Not</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Total Cost Field */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 <label className="text-dark-grey font-text-text-bold-text-sm-bold font-[number:var(--text-text-bold-text-sm-bold-font-weight)]">
//                   Total Cost
//                 </label>
//                 <Input
//                   placeholder="Enter total cost"
//                   required
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                 />
//               </div>
//             </CardContent>
//           </Card>

//           {/* Action Buttons */}
//           <div className="flex items-center justify-end gap-1 w-full">
//             <Button
//               variant="outline"
//               className="bg-colors-background-light border-colors-cerulean-blue-600 text-colors-cerulean-blue-600 rounded-xl px-6 py-3 h-auto font-text-text-bold-text-sm-bold"
//             >
//               Discard Changes
//             </Button>
//             <Button className="bg-colors-cerulean-blue-600 text-white rounded-xl px-6 py-3 h-auto font-text-text-bold-text-sm-bold">
//               Save&nbsp;&nbsp;Changes
//             </Button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addShipment } from "@/utils/localStorage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

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
    courier: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id.startsWith("dimension-")) {
      const key = id.split("-")[1];
      setForm((prev) => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [key]: value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = () => {
    const trackingNo = `TX-${Date.now()}`;
    const newOrder = {
      ...form,
      trackingNo,
      createdDate: new Date().toLocaleDateString("en-GB"),
      estimatedDelivery: "28/03/2025",
      status: "Review order",
    };

    addShipment(newOrder);
    navigate("/order-overview");
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Manual Order Entry</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sender Info */}
        <Card>
          <CardHeader><CardTitle>Sender Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Label>Full Name</Label>
            <Input id="senderName" value={form.senderName} onChange={handleChange} />
            <Label>Email</Label>
            <Input id="senderEmail" value={form.senderEmail} onChange={handleChange} />
            <Label>Address</Label>
            <Textarea id="senderAddress" value={form.senderAddress} onChange={handleChange} />
            <Label>Phone</Label>
            <Input id="senderPhone" value={form.senderPhone} onChange={handleChange} />
          </CardContent>
        </Card>

        {/* Receiver Info */}
        <Card>
          <CardHeader><CardTitle>Receiver Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Label>Full Name</Label>
            <Input id="receiverName" value={form.receiverName} onChange={handleChange} />
            <Label>Email</Label>
            <Input id="receiverEmail" value={form.receiverEmail} onChange={handleChange} />
            <Label>Address</Label>
            <Textarea id="receiverAddress" value={form.receiverAddress} onChange={handleChange} />
            <Label>Phone</Label>
            <Input id="receiverPhone" value={form.receiverPhone} onChange={handleChange} />
          </CardContent>
        </Card>
      </div>

      {/* Package Info */}
      <Card>
        <CardHeader><CardTitle>Package Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Label>Package Type</Label>
          <Input id="packageType" value={form.packageType} onChange={handleChange} />
          <Label>Weight</Label>
          <Input id="weight" value={form.weight} onChange={handleChange} />
          <Label>Dimensions (cm)</Label>
          <div className="grid grid-cols-3 gap-4">
            <Input id="dimension-length" placeholder="Length" value={form.dimensions.length} onChange={handleChange} />
            <Input id="dimension-width" placeholder="Width" value={form.dimensions.width} onChange={handleChange} />
            <Input id="dimension-height" placeholder="Height" value={form.dimensions.height} onChange={handleChange} />
          </div>
          <Label>Courier Partner</Label>
          <Input id="courier" value={form.courier} onChange={handleChange} />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Create Order</Button>
      </div>
    </div>
  );
};

export default ManualOrder;

