import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { FileTextIcon, ShieldIcon, UserIcon } from "lucide-react";
import React from "react";

export const PlanTabsSection = () => {
  // Data for tabs to enable mapping
  const tabsData = [
    {
      value: "profile",
      label: "Profile",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      value: "security",
      label: "Security",
      icon: <ShieldIcon className="w-5 h-5" />,
    },
    {
      value: "subscriptions",
      label: "Subscriptions",
      icon: <FileTextIcon className="w-5 h-5" />,
    },
  ];

  return (
    <Tabs defaultValue="subscriptions" className="w-full">
      <TabsList className="flex w-full border-b border-core-colors-grey-8 h-12 bg-transparent">
        {tabsData.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex items-center gap-2 min-w-[var(--core-components-tabs-item-min-width)] h-12 min-h-[var(--core-components-tabs-item-min-height)] data-[state=active]:border-b-2 data-[state=active]:border-[#1e2833] data-[state=active]:text-[#1e2833] data-[state=inactive]:text-theme-text-secondary-duplicate rounded-none"
          >
            {tab.icon}
            <span className="[font-family:'Outfit-SemiBold',Helvetica] font-semibold text-sm leading-[22px] tracking-[0] whitespace-nowrap">
              {tab.label}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default PlanTabsSection;
