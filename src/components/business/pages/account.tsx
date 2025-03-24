// import { useState } from "react";
// import { Pencil } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const AccountSettings = () => {
//   const [formData, setFormData] = useState({
//     logo: null,
//     businessName: "FastTrack Logistics",
//     description: "Courier service provider with 24/7 support",
//     address: "123 Delivery Street, Cityville",
//     email: "support@fasttrack.com",
//     phone: "+1 (555) 123-4567",
//   });

//   const [editMode, setEditMode] = useState({
//     businessName: false,
//     description: false,
//     address: false,
//     email: false,
//     phone: false,
//   });

//   const [errors, setErrors] = useState<any>({});

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev: any) => ({ ...prev, [field]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors: any = {};
//     if (!formData.businessName) newErrors.businessName = "Business name is required";
//     if (!formData.address) newErrors.address = "Address is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (!validateForm()) return;
//     // Save logic here (API/localStorage/etc.)
//     setEditMode({
//       businessName: false,
//       description: false,
//       address: false,
//       email: false,
//       phone: false,
//     });
//     alert("Changes saved!");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-1">Account Settings</h1>
//       <p className="text-sm text-gray-500 mb-6">Manage your business information and settings</p>

//       {/* Business Logo */}
//       <div className="flex items-start gap-4 mb-8">
//         <div className="w-24 h-24 rounded-full border border-dashed flex items-center justify-center text-sm text-gray-500">
//           Logo
//         </div>
//         <div>
//           <p className="font-medium">Business Logo</p>
//           <p className="text-sm text-gray-500 mb-2">
//             Your logo will appear on your dashboard, profile, and documents.
//           </p>
//           <Button variant="outline" className="text-sm">Change Logo</Button>
//         </div>
//       </div>

//       {/* Form Fields */}
//       <div className="space-y-5">
//         {/* Business Name */}
//         <Field
//           label="Business Name"
//           required
//           value={formData.businessName}
//           editable={editMode.businessName}
//           onChange={(val) => handleInputChange("businessName", val)}
//           onEdit={() => setEditMode((prev) => ({ ...prev, businessName: true }))}
//           error={errors.businessName}
//         />

//         {/* Description */}
//         <Field
//           label="Description"
//           value={formData.description}
//           editable={editMode.description}
//           multiline
//           onChange={(val) => handleInputChange("description", val)}
//           onEdit={() => setEditMode((prev) => ({ ...prev, description: true }))}
//         />

//         {/* Address */}
//         <Field
//           label="Address"
//           required
//           value={formData.address}
//           editable={editMode.address}
//           onChange={(val) => handleInputChange("address", val)}
//           onEdit={() => setEditMode((prev) => ({ ...prev, address: true }))}
//           error={errors.address}
//         />

//         {/* Email */}
//         <Field
//           label="Email Address"
//           required
//           value={formData.email}
//           editable={editMode.email}
//           onChange={(val) => handleInputChange("email", val)}
//           onEdit={() => setEditMode((prev) => ({ ...prev, email: true }))}
//           error={errors.email}
//         />

//         {/* Phone */}
//         <Field
//           label="Phone Number"
//           value={formData.phone}
//           editable={editMode.phone}
//           onChange={(val) => handleInputChange("phone", val)}
//           onEdit={() => setEditMode((prev) => ({ ...prev, phone: true }))}
//         />
//       </div>

//       {/* Footer Actions */}
//       <div className="mt-8 flex justify-end gap-4">
//         <Button variant="outline">Cancel</Button>
//         <Button onClick={handleSave}>Save Changes</Button>
//       </div>
//     </div>
//   );
// };

// export default AccountSettings;

// // Field Component
// const Field = ({
//   label,
//   value,
//   required = false,
//   multiline = false,
//   editable = false,
//   onChange,
//   onEdit,
//   error,
// }: {
//   label: string;
//   value: string;
//   required?: boolean;
//   multiline?: boolean;
//   editable: boolean;
//   onChange: (val: string) => void;
//   onEdit: () => void;
//   error?: string;
// }) => {
//   return (
//     <div>
//       <div className="flex items-center justify-between mb-1">
//         <label className="font-medium">
//           {label} {required && <span className="text-red-500">*</span>}
//         </label>
//         {!editable && (
//           <button onClick={onEdit} type="button" className="text-gray-400 hover:text-gray-600">
//             <Pencil className="w-4 h-4" />
//           </button>
//         )}
//       </div>
//       {editable ? (
//         multiline ? (
//           <Textarea
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             className="min-h-[80px]"
//           />
//         ) : (
//           <Input value={value} onChange={(e) => onChange(e.target.value)} />
//         )
//       ) : (
//         <div className="text-gray-700 border px-3 py-2 rounded-md bg-gray-50">{value}</div>
//       )}
//       {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
//     </div>
//   );
// };

// import React from "react";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ChevronRight, Upload } from "lucide-react";

// // Mock data for form fields
// const formData = {
//   sku: "yogavwijaya@gmail",
//   productName: "Story Kitadake",
//   size: "44",
//   color: "Red White",
//   category: "Sneakers",
//   price: "$22.00",
//   quantity: "1112",
// };

// // Mock data for image placeholders
// const imageSlots = [
//   { id: 1, label: "Photo 2" },
//   { id: 2, label: "Photo 3" },
//   { id: 3, label: "Photo 4" },
// ];

// export default function Container() {
//   return (
//     <div className="flex flex-col items-start gap-[22px] p-8">
//       {/* Header */}
//       <header className="flex flex-col items-start gap-2">
//         <h1 className="text-[#2a2a2a] text-2xl font-semibold mt-[-1px]">
//           Product
//         </h1>
//         <Breadcrumb>
//           <BreadcrumbList className="flex items-center gap-1">
//             <BreadcrumbItem>
//               <BreadcrumbLink className="text-colors-neutral-400 text-sm">Dashboard</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
//             <BreadcrumbItem>
//               <BreadcrumbLink className="text-colors-neutral-400 text-sm">Product</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
//             <BreadcrumbItem>
//               <BreadcrumbLink className="text-colors-neutral-400 text-sm">Sneakers</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
//             <BreadcrumbItem>
//               <BreadcrumbLink className="text-colors-cerulean-blue-600 text-sm font-bold">
//                 Edit&nbsp;&nbsp;Product
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </header>

//       {/* Main Content */}
//       <div className="flex items-start gap-[22px] w-full">
//         {/* Left Column - Product Information */}
//         <Card className="w-[600px] rounded-3xl border-colors-neutral-100">
//           <CardHeader className="gap-2">
//             <CardTitle className="text-colors-neutral-800 text-[22px]">
//               Product Information
//             </CardTitle>
//             <CardDescription className="text-colors-neutral-300 text-sm">
//               Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="flex flex-col gap-4">
//             {/* SKU */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-dark-grey text-sm font-bold">SKU</label>
//               <Input
//                 className="h-[52px] rounded-xl border-[1.6px] border-colors-cerulean-blue-600"
//                 defaultValue={formData.sku}
//               />
//             </div>

//             {/* Product Name */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-dark-grey text-sm font-bold">Product Name</label>
//               <Input
//                 className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                 defaultValue={formData.productName}
//               />
//             </div>

//             {/* Size and Color */}
//             <div className="flex gap-4 w-full">
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Size</label>
//                 <Input
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   defaultValue={formData.size}
//                 />
//               </div>
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Color</label>
//                 <Input
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   defaultValue={formData.color}
//                 />
//               </div>
//             </div>

//             {/* Category and Price */}
//             <div className="flex gap-4 w-full">
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Product Category</label>
//                 <Select defaultValue={formData.category}>
//                   <SelectTrigger className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Sneakers">Sneakers</SelectItem>
//                     <SelectItem value="Boots">Boots</SelectItem>
//                     <SelectItem value="Sandals">Sandals</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Price</label>
//                 <Input
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   defaultValue={formData.price}
//                 />
//               </div>
//             </div>

//             {/* Quantity */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-dark-grey text-sm font-bold">Quantity</label>
//               <Input
//                 className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                 defaultValue={formData.quantity}
//               />
//             </div>

//             {/* Status Product */}
//             <div className="flex flex-col gap-1.5 h-[79px]">
//               <label className="text-dark-grey text-sm font-bold">Status Product</label>
//               <Select>
//                 <SelectTrigger className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200">
//                   <SelectValue placeholder="Select status&nbsp;&nbsp;product" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="active">Active</SelectItem>
//                   <SelectItem value="inactive">Inactive</SelectItem>
//                   <SelectItem value="draft">Draft</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Right Column - Images and Actions */}
//         <Card className="w-[600px] rounded-3xl border-colors-neutral-100">
//           <CardHeader className="gap-2">
//             <CardTitle className="text-colors-neutral-800 text-[22px]">
//               Product Information
//             </CardTitle>
//             <CardDescription className="text-colors-neutral-300 text-sm">
//               Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="flex flex-col gap-4">
//             {/* SKU */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-dark-grey text-sm font-bold">SKU</label>
//               <Input
//                 className="h-[52px] rounded-xl border-[1.6px] border-colors-cerulean-blue-600"
//                 defaultValue={formData.sku}
//               />
//             </div>

//             {/* Product Name */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-dark-grey text-sm font-bold">Product Name</label>
//               <Input
//                 className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                 defaultValue={formData.productName}
//               />
//             </div>

//             {/* Size and Color */}
//             <div className="flex gap-4 w-full">
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Size</label>
//                 <Input
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   defaultValue={formData.size}
//                 />
//               </div>
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Color</label>
//                 <Input
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   defaultValue={formData.color}
//                 />
//               </div>
//             </div>

//             {/* Category and Price */}
//             <div className="flex gap-4 w-full">
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Product Category</label>
//                 <Select defaultValue={formData.category}>
//                   <SelectTrigger className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Sneakers">Sneakers</SelectItem>
//                     <SelectItem value="Boots">Boots</SelectItem>
//                     <SelectItem value="Sandals">Sandals</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex-1 flex flex-col gap-1.5">
//                 <label className="text-dark-grey text-sm font-bold">Price</label>
//                 <Input
//                   className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                   defaultValue={formData.price}
//                 />
//               </div>
//             </div>

//             {/* Quantity */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-dark-grey text-sm font-bold">Quantity</label>
//               <Input
//                 className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200"
//                 defaultValue={formData.quantity}
//               />
//             </div>

//             {/* Status Product */}
//             <div className="flex flex-col gap-1.5 h-[79px]">
//               <label className="text-dark-grey text-sm font-bold">Status Product</label>
//               <Select>
//                 <SelectTrigger className="h-[52px] rounded-xl border-[1.6px] border-colors-neutral-200">
//                   <SelectValue placeholder="Select status&nbsp;&nbsp;product" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="active">Active</SelectItem>
//                   <SelectItem value="inactive">Inactive</SelectItem>
//                   <SelectItem value="draft">Draft</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </CardContent>
//         </Card>

//           {/* Action Buttons */}
//           {/* <div className="flex items-center justify-between w-full">
//             <Button
//               variant="outline"
//               className="bg-colors-background-light border border-colors-cerulean-blue-600 text-colors-cerulean-blue-600 rounded-xl px-6 py-3 font-bold"
//             >
//               Discard Changes
//             </Button>
//             <Button className="bg-colors-cerulean-blue-600 text-white rounded-xl px-6 py-3 font-bold">
//               Save&nbsp;&nbsp;Changes
//             </Button>
//           </div> */}
//         </div>
//       </div>
//   );
// }

"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Pencil } from "lucide-react";

const initialData = {
  businessName: "yogavwijaya@gmail",
  description: "Story Kitadake",
  address: "1112 Mountain Rd, Tokyo",
  email: "yoga@email.com",
  phone: "+81 90-1234-5678",
};

export default function AccountPage() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.businessName) newErrors.businessName = "Business Name is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Telephone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      // Could add API call here
      setEditMode(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-[22px] p-8">
      {/* Page Header */}
      <header className="flex flex-col items-start gap-2 w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[#2a2a2a] text-2xl font-semibold mt-[-1px]">Account</h1>
          {!editMode && (
            <Button variant="ghost" size="icon" onClick={() => setEditMode(true)}>
              <Pencil className="w-5 h-5 text-colors-neutral-500" />
            </Button>
          )}
        </div>
        {/* <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1">
            <BreadcrumbItem>
              <BreadcrumbLink className="text-colors-neutral-400 text-sm">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="w-4 h-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-colors-cerulean-blue-600 text-sm font-bold">Account</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </header>

      {/* Main Content */}
      <div className="flex items-start gap-[22px] w-full">
        <Card className="w-[600px] rounded-3xl border-colors-neutral-100">
          <CardHeader className="gap-2">
            <CardTitle className="text-colors-neutral-800 text-[22px]">Account</CardTitle>
            <CardDescription className="text-colors-neutral-300 text-sm">
              Manage your business information. All fields marked with * are required.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            {/* Business Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-dark-grey text-sm font-bold">
                Business Name<span className="text-red-500">*</span>
              </label>
              <Input
                className={`h-[52px] rounded-xl border-[1.6px] ${
                  errors.businessName ? "border-red-500" : "border-colors-cerulean-blue-600"
                }`}
                value={formData.businessName}
                onChange={(e) => handleChange("businessName", e.target.value)}
                disabled={!editMode}
                placeholder="Enter your business name"
              />
              <span className="text-xs text-muted-foreground">Your official registered business name.</span>
              {errors.businessName && <span className="text-xs text-red-500">{errors.businessName}</span>}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-dark-grey text-sm font-bold">
                Description<span className="text-red-500">*</span>
              </label>
              <Input
                className={`h-[52px] rounded-xl border-[1.6px] ${
                  errors.description ? "border-red-500" : "border-colors-neutral-200"
                }`}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                disabled={!editMode}
                placeholder="Describe your business"
              />
              <span className="text-xs text-muted-foreground">Brief summary of your business or store.</span>
              {errors.description && <span className="text-xs text-red-500">{errors.description}</span>}
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-dark-grey text-sm font-bold">
                Address<span className="text-red-500">*</span>
              </label>
              <Input
                className={`h-[52px] rounded-xl border-[1.6px] ${
                  errors.address ? "border-red-500" : "border-colors-neutral-200"
                }`}
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                disabled={!editMode}
                placeholder="Enter your business address"
              />
              <span className="text-xs text-muted-foreground">Physical or mailing address of your business.</span>
              {errors.address && <span className="text-xs text-red-500">{errors.address}</span>}
            </div>

            {/* Email & Phone */}
            <div className="flex gap-4 w-full">
              {/* Email */}
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-dark-grey text-sm font-bold">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input
                  className={`h-[52px] rounded-xl border-[1.6px] ${
                    errors.email ? "border-red-500" : "border-colors-neutral-200"
                  }`}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  disabled={!editMode}
                  placeholder="your@email.com"
                />
                <span className="text-xs text-muted-foreground">We'll contact you here regarding updates.</span>
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-dark-grey text-sm font-bold">
                  Telephone No.<span className="text-red-500">*</span>
                </label>
                <Input
                  className={`h-[52px] rounded-xl border-[1.6px] ${
                    errors.phone ? "border-red-500" : "border-colors-neutral-200"
                  }`}
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  disabled={!editMode}
                  placeholder="+81 90-XXXX-XXXX"
                />
                <span className="text-xs text-muted-foreground">Include country code if international.</span>
                {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
              </div>
            </div>

            {/* Action Buttons */}
            {editMode && (
              <div className="flex justify-end gap-2 pt-4">
                <Button
                  variant="outline"
                  className="bg-white border border-colors-cerulean-blue-600 text-colors-cerulean-blue-600 rounded-xl px-6 py-3 font-bold"
                  onClick={() => {
                    setFormData(initialData);
                    setEditMode(false);
                    setErrors({});
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-colors-cerulean-blue-600 text-white rounded-xl px-6 py-3 font-bold"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
