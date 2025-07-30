import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CreditCard, Shield, User } from "lucide-react";
import React from "react";

const formFields = [
  { id: "name", label: "Name", value: "Jayvion Simon", col: 1 },
  {
    id: "email",
    label: "Email",
    value: "nannie.abernathy70@yahoo.com",
    col: 2,
  },
  { id: "phone", label: "Phone number", value: "365-374-4961", col: 1 },
  {
    id: "address",
    label: "Address",
    value: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    col: 2,
  },
  { id: "state", label: "State/region", value: "Chalandri", col: 2 },
  { id: "city", label: "City", value: "Chalandri", col: 1 },
  { id: "zip", label: "Zip/code", value: "22000", col: 2 },
];

export default function VerticalContainer() {
  return (
    <div className="flex flex-col w-[var(--layout-container-vertical-width)] items-start justify-center gap-[var(--core-spacing-spacing-5)] pr-[var(--layout-container-vertical-px)] pb-[var(--layout-container-vertical-py)] pl-[var(--layout-container-vertical-px)] pt-10 relative">
      {/* Header section */}
      <div className="flex flex-wrap items-start justify-between gap-[var(--core-spacing-spacing-2)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col min-w-[280px] justify-center gap-[var(--core-spacing-spacing-1)] flex-1 grow flex items-start relative">
          <h1 className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Bold',Helvetica] font-bold text-[#1e2833] text-2xl tracking-[0] leading-9 whitespace-nowrap">
            Settings
          </h1>

          <nav className="flex items-center gap-[var(--core-spacing-spacing-2)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[var(--core-spacing-spacing-0-5)] relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Dashboard
              </span>
            </div>

            <div className="relative w-1 h-1 bg-theme-text-disabled-duplicate rounded-sm" />

            <div className="inline-flex items-center gap-[var(--core-spacing-spacing-0-5)] relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Settings
              </span>
            </div>
          </nav>
        </div>

        {/* Hidden New Broker button */}
        <Button className="inline-flex min-w-[var(--core-components-button-min-width)] h-[var(--core-components-button-md-height)] items-center justify-center gap-[var(--core-components-button-spacing)] pr-[var(--core-components-button-sm-px)] pl-[var(--core-components-button-sm-px)] py-0 relative flex-[0_0_auto] rounded-[var(--core-components-button-radius)] bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] opacity-0">
          <img
            className="relative w-5 h-5 mt-[-21258.00px] ml-[-2334.00px]"
            alt="Start icon"
            src=""
          />
          <span className="relative w-fit [font-family:'Outfit-Bold',Helvetica] font-bold text-[color:var(--theme-global-inherit-color)] text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
            New Broker
          </span>
        </Button>
      </div>

      {/* Main content section */}
      <div className="flex-col gap-[var(--core-spacing-spacing-5)] self-stretch w-full flex-[0_0_auto] flex items-start relative">
        {/* Tabs navigation */}
        <Tabs defaultValue="profile" className="w-full">
          <div className="relative w-full">
            <TabsList className="flex items-center gap-[var(--core-components-tabs-list-spacing)] relative self-stretch w-full flex-[0_0_auto] h-12 bg-transparent">
              <TabsTrigger
                value="profile"
                className="border-b-2 [border-bottom-style:solid] border-[#1e2833] inline-flex min-w-[var(--core-components-tabs-item-min-width)] h-12 items-center justify-center gap-[var(--core-components-tabs-item-spacing)] relative flex-[0_0_auto] min-h-[var(--core-components-tabs-item-min-height)] data-[state=active]:border-b-2 data-[state=active]:border-[#1e2833] data-[state=inactive]:border-b-0"
              >
                <User className="w-6 h-6" />
                <span className="relative w-fit [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[#1e2833] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Profile
                </span>
              </TabsTrigger>

              <TabsTrigger
                value="security"
                className="inline-flex min-w-[var(--core-components-tabs-item-min-width)] h-12 items-center justify-center gap-[var(--core-components-tabs-item-spacing)] relative flex-[0_0_auto] min-h-[var(--core-components-tabs-item-min-height)]"
              >
                <Shield className="w-6 h-6" />
                <span className="relative w-fit [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Security
                </span>
              </TabsTrigger>

              <TabsTrigger
                value="subscriptions"
                className="inline-flex min-w-[var(--core-components-tabs-item-min-width)] h-12 items-center justify-center gap-[var(--core-components-tabs-item-spacing)] relative flex-[0_0_auto] min-h-[var(--core-components-tabs-item-min-height)]"
              >
                <CreditCard className="w-6 h-6" />
                <span className="relative w-fit [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Subscriptions
                </span>
              </TabsTrigger>
            </TabsList>
            <Separator className="absolute w-full h-0.5 top-[46px] left-0 bg-core-colors-grey-8" />
          </div>

          {/* Profile tab content */}
          <TabsContent
            value="profile"
            className="mt-[var(--core-spacing-spacing-3)]"
          >
            <Card className="shadow-shadow-card rounded-[var(--core-components-card-radius)]">
              <CardContent className="flex flex-col items-end gap-[var(--core-spacing-spacing-3)] pt-[var(--core-components-card-content-p)] pr-[var(--core-components-card-content-p)] pb-[var(--core-components-card-content-p)] pl-[var(--core-components-card-content-p)] relative bg-theme-background-paper-duplicate">
                {/* Form fields - first row */}
                <div className="flex flex-wrap items-start justify-end gap-[var(--core-spacing-spacing-2)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                    <div className="relative w-full">
                      <Input
                        defaultValue="Jayvion Simon"
                        className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[15px]"
                      />
                      <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 bg-theme-background-paper-duplicate">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                          Name
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                    <div className="relative w-full">
                      <Input
                        defaultValue="nannie.abernathy70@yahoo.com"
                        className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[15px]"
                      />
                      <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 bg-theme-background-paper-duplicate">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                          Email
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form fields - second row */}
                <div className="flex flex-wrap gap-[var(--core-spacing-spacing-2)] self-stretch w-full flex-[0_0_auto] items-start relative">
                  <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                    <div className="relative w-full">
                      <Input
                        defaultValue="365-374-4961"
                        className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[15px]"
                      />
                      <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 bg-theme-background-paper-duplicate">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                          Phone number
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                    <div className="relative w-full">
                      <Input
                        defaultValue="19034 Verna Unions Apt. 164 - Honolulu, RI / 87535"
                        className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[15px]"
                      />
                      <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 bg-theme-background-paper-duplicate">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                          Address
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form fields - third row */}
                <div className="flex flex-wrap gap-[var(--core-spacing-spacing-2)] self-stretch w-full flex-[0_0_auto] items-start relative">
                  <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                    <Select>
                      <SelectTrigger className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-theme-text-disabled-duplicate text-[15px]">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                    <div className="relative w-full">
                      <Input
                        defaultValue="Chalandri"
                        className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[15px]"
                      />
                      <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 bg-theme-background-paper-duplicate">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                          State/region
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form fields - fourth row */}
                <div className="flex-col items-start justify-center gap-6 flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-wrap gap-[var(--core-spacing-spacing-2)] self-stretch w-full flex-[0_0_auto] items-start relative">
                    <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                      <div className="relative w-full">
                        <Input
                          defaultValue="Chalandri"
                          className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[15px]"
                        />
                        <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 bg-theme-background-paper-duplicate">
                          <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                            City
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col min-w-[294px] items-start relative flex-1 grow">
                      <div className="relative w-full">
                        <Input
                          defaultValue="22000"
                          className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center pr-[var(--core-components-textfield-outlined-px)] pl-[var(--core-components-textfield-outlined-px)] py-0 relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate [font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[15px]"
                        />
                        <div className="inline-flex items-center pr-[var(--core-spacing-spacing-2px)] pl-[var(--core-spacing-spacing-2px)] py-0 absolute top-[-5px] left-3.5 bg-theme-background-paper-duplicate">
                          <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-theme-text-secondary-duplicate text-xs tracking-[0] leading-3 whitespace-nowrap">
                            Zip/code
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="items-center justify-between flex relative self-stretch w-full flex-[0_0_auto]">
                  <Button
                    variant="destructive"
                    className="inline-flex min-w-[var(--core-components-button-min-width)] pr-[var(--core-components-button-md-px)] pl-[var(--core-components-button-md-px)] py-0 flex-[0_0_auto] bg-core-colors-error-8 h-[var(--core-components-button-md-height)] items-center justify-center gap-[var(--core-components-button-spacing)] relative rounded-[var(--core-components-button-radius)]"
                  >
                    <span className="relative w-fit [font-family:'Outfit-Bold',Helvetica] font-bold text-theme-swap-dark-light-error text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                      Delete Account
                    </span>
                  </Button>

                  <Button className="flex w-[134px] pr-[var(--core-components-button-lg-px)] pl-[var(--core-components-button-lg-px)] py-0 bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] h-[var(--core-components-button-md-height)] items-center justify-center gap-[var(--core-components-button-spacing)] relative rounded-[var(--core-components-button-radius)] min-w-[var(--core-components-button-min-width)]">
                    <span className="relative w-fit [font-family:'Outfit-Bold',Helvetica] font-bold text-[color:var(--theme-global-inherit-color)] text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                      Save changes
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            {/* Security tab content would go here */}
          </TabsContent>

          <TabsContent value="subscriptions">
            {/* Subscriptions tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
