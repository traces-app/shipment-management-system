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
                Courier Name<span className="text-red-500">*</span>
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
