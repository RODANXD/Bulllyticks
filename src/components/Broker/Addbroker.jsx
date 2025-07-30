import React from "react";
import { ChevronDown, Eye } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export default function AddBrokerSection() {
  // Form field data for mapping
  const formFields = {
    row1: [
      {
        type: "select",
        label: "Broker Name",
        placeholder: "Select",
        width: "flex-1",
      },
      {
        type: "input",
        label: "Nick Name",
        placeholder: "Enter nickname",
        width: "flex-1",
      },
    ],
    row2: [
      {
        type: "input",
        label: "API Key",
        placeholder: "Enter API key",
        width: "flex-1",
      },
      {
        type: "input",
        label: "Auth Token",
        placeholder: "Enter auth token",
        width: "flex-1",
      },
    ],
    row3: [
      {
        type: "input",
        label: "Secret Key",
        placeholder: "Enter secret key",
        width: "flex-1",
      },
    ],
    row4: [
      {
        type: "input",
        label: "Account Number",
        placeholder: "Enter account number",
        width: "flex-1",
      },
      {
        type: "password",
        label: "Password",
        placeholder: "*******",
        width: "flex-1",
      },
    ],
  };

  // Custom form field renderer
  const renderFormField = (field, index) => {
    if (field.type === "select") {
      return (
        <div key={index} className={`flex flex-col items-start relative ${field.width}`}>
          <div className="relative w-full">
            <Select>
              <SelectTrigger className="h-[var(--core-components-textfield-outlined-md-height)] border-theme-components-textfield-outline-duplicate">
                <SelectValue
                  placeholder={field.placeholder}
                  className="[font-family:'Outfit-Regular',Helvetica] text-[15px]"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            
            </Select>
            <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 z-10">
              <div className="absolute w-auto h-0.5 top-[5px] left-0 bg-theme-background-paper-duplicate" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                {field.label}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (field.type === "password") {
      return (
        <div key={index} className={`flex flex-col items-start relative ${field.width}`}>
          <div className="relative w-full">
            <Input
              type="password"
              className="h-[var(--core-components-textfield-outlined-md-height)] border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] text-[15px]"
              placeholder={field.placeholder}
            />
            <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 z-10">
              <div className="absolute w-auto h-0.5 top-[5px] left-0 bg-theme-background-paper-duplicate" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                {field.label}
              </div>
            </div>
            <div className="inline-flex h-6 items-center justify-center absolute top-[15px] right-3">
              <Eye className="w-6 h-6" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className={`flex flex-col items-start relative ${field.width}`}>
          <div className="relative w-full">
            <Input
              className="h-[var(--core-components-textfield-outlined-md-height)] border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] text-[15px]"
              placeholder={field.placeholder}
            />
            <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 z-10">
              <div className="absolute w-auto h-0.5 top-[5px] left-0 bg-theme-background-paper-duplicate" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                {field.label}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
      <h2 className="self-stretch [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#212121] text-base leading-[22px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative mt-[-1.00px] tracking-[0]">
        Add Broker
      </h2>
      <Card className="w-full bg-theme-background-paper-duplicate">
        <CardContent className="flex flex-col items-center gap-4 pt-[var(--core-components-card-content-p)] pb-[var(--core-components-card-content-p)] px-4">
          {/* Row 1 */}
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {formFields.row1.map(renderFormField)}
          </div>
          {/* Row 2 */}
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {formFields.row2.map(renderFormField)}
          </div>
          {/* Row 3 */}
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              {formFields.row3.map(renderFormField)}
            </div>
            {/* Row 4 */}
            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              {formFields.row4.map(renderFormField)}
            </div>
          </div>
          {/* Buttons */}
          <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
            <Button className="w-[182px] h-[var(--core-components-button-lg-height)] bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[15px] tracking-[0] leading-[26px]">
              Verify Connection
            </Button>
            <Button
              variant="outline"
              className="w-[158px] h-[var(--core-components-button-lg-height)] border-theme-components-button-outlined [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#1e2833] text-[15px] tracking-[0] leading-[26px]"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
