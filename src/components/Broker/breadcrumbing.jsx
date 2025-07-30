import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import React from "react";

export const BreadcrumbSection = () => {
  return (
    <div className="flex flex-wrap items-start justify-between gap-2 w-full">
      <div className="flex flex-col min-w-[280px] items-start justify-center gap-1 flex-1">
        <h1 className="text-[#1e2833] font-semibold text-xl leading-tight tracking-tight">
          Broker
        </h1>

        <Breadcrumb className="w-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-sm text-[#1e2833]">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="w-1 h-1 bg-gray-400 rounded-sm" />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-sm text-[#1e2833]">
                Broker
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Button
        className="bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] text-white h-auto"
        size="sm"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        <span>New Broker</span>
      </Button>
    </div>
  );
};

export default BreadcrumbSection;
