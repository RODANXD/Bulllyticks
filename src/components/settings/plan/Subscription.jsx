import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

export default function PlanSelectionSection() {
  // Data for the billing information rows
  const billingInfo = [
    { label: "Plan", value: "ProPlan", hasDropdown: false },
    { label: "Billing name", value: "Lucian Obrien", hasDropdown: true },
    {
      label: "Billing address",
      value: "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
      hasDropdown: false,
    },
    {
      label: "Billing phone number",
      value: "904-966-2836",
      hasDropdown: false,
    },
    { label: "Payment method", value: "Visa - 1234", hasDropdown: true },
  ];

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="flex flex-col gap-2 p-3">
        {billingInfo.map((item, index) => (
          <div key={index} className="flex flex-wrap items-start gap-2 w-full">
            <div className="w-[210px] mt-[-1px] font-normal text-sm leading-[22px] text-theme-text-secondary-duplicate font-['Outfit-Regular',Helvetica]">
              {item.label}
            </div>

            {item.hasDropdown ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="inline-flex items-center gap-0.5 cursor-pointer">
                    <div className="font-['Outfit-SemiBold',Helvetica] font-semibold mt-[-1px] text-[#1e2833] text-sm leading-[22px]">
                      {item.value}
                    </div>
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div
                className={`flex-1 mt-[-1px] text-[#1e2833] text-sm leading-[22px] ${index === 0 ? "font-['Outfit-SemiBold',Helvetica] font-semibold" : "font-['Outfit-Regular',Helvetica] font-normal"}`}
              >
                {item.value}
              </div>
            )}
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex justify-end gap-1.5 p-[var(--core-components-card-content-p)] border-t border-dashed border-theme-components-divider">
        <Button
          variant="outline"
          className="h-[var(--core-components-button-md-height)] px-[var(--core-components-button-md-px)] min-w-[var(--core-components-button-min-width)] rounded-[var(--core-components-button-radius)] font-['Outfit-Bold',Helvetica] font-bold text-[#1e2833] text-sm"
        >
          Cancel plan
        </Button>

        <Button className="h-[var(--core-components-button-md-height)] px-[var(--core-components-button-lg-px)] min-w-[var(--core-components-button-min-width)] rounded-[var(--core-components-button-radius)] bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] font-['Outfit-Bold',Helvetica] font-bold text-[color:var(--theme-global-inherit-color)] text-sm">
          Upgrade plan
        </Button>
      </CardFooter>
    </Card>
  );
}
