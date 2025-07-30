import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChevronDown, Circle, Play } from "lucide-react";
import React from "react";

export default function NiftyStrategySection() {
  return (
    <Card className="w-full p-6 border border-[#dadada] rounded-2xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[17px]">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl text-[#1e2833] font-['Outfit-SemiBold',Helvetica]">
              Nifty Strategy
            </h2>
            <span className="text-base text-[#1e2833] font-['Outfit-Regular',Helvetica]">
              24 July 2025
            </span>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Left column with input and buttons */}
          <div className="flex flex-col gap-6 w-[428px]">
            <div className="flex gap-6 items-start">
              {/* Lot Size Input */}
              <div className="w-[270px] flex flex-col">
                <div className="relative">
                  <div className="border border-solid rounded-md h-12 relative">
                    <Input
                      defaultValue="1"
                      className="h-12 font-['Outfit-Regular',Helvetica] text-[15px]"
                    />
                    <Label className="absolute -top-2 left-3.5 px-1 bg-white text-xs font-medium font-['Outfit-Medium',Helvetica] text-theme-text-secondary-duplicate">
                      Lot Size
                    </Label>
                    <ChevronDown className="absolute right-3 top-3 w-6 h-6 text-gray-500" />
                  </div>
                  <div className="pt-1 pl-3 text-xs text-theme-text-secondary-duplicate font-['Outfit-Regular',Helvetica]">
                    1 LOT = 75 Shares
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <Button
                variant="outline"
                className="w-[134px] h-12 rounded-lg text-[10px] font-semibold text-[#1e2833] font-['Poppins-SemiBold',Helvetica] border border-gradient-to-r from-[rgba(0,92,137,1)] to-[rgba(1,47,70,1)]"
              >
                Save
              </Button>
            </div>

            {/* Start Algo Button */}
            <Button className="w-full h-[42px] bg-gradient-to-r from-[rgba(0,92,137,1)] to-[rgba(1,47,70,1)] rounded-md flex items-center justify-center gap-2 text-[10px] font-semibold font-['Poppins-SemiBold',Helvetica]">
              <Play className="w-[18px] h-[18px]" />
              Start Algo
            </Button>
          </div>

          {/* Right column with cards */}
          <div className="flex flex-col gap-[11px] flex-1">
            {/* Capital Required Card */}
            <Card className="shadow-[0px_12px_24px_-4px_#919eab1f,0px_0px_2px_#919eab33] h-[87px]">
              <CardContent className="p-4 flex items-center">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-themes-text-secondary font-['Outfit-Medium',Helvetica]">
                    Capital Required
                  </span>
                  <span className="text-lg font-semibold text-[#1e2833] font-['Outfit-SemiBold',Helvetica] leading-[48px]">
                    ₹ 35,000
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Current Status Card */}
            <Card className="shadow-[0px_12px_24px_-4px_#919eab1f,0px_0px_2px_#919eab33] h-[87px]">
              <CardContent className="p-4 flex items-center">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-themes-text-secondary font-['Outfit-Medium',Helvetica]">
                    Current Status
                  </span>
                  <div className="flex items-center gap-[5px]">
                    <Circle className="w-3 h-3 fill-current text-red-500" />
                    <span className="text-lg font-semibold text-[#1e2833] font-['Outfit-SemiBold',Helvetica] leading-[48px]">
                      Stopped
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
}
