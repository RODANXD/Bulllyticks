import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Check } from "lucide-react";
import React from "react";

const SubscriptionDetailsSection = () => {
  // Plan feature data
  const planFeatures = {
    freeTrial: [
      "30h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
    ],
    standard: [
      "15h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "3 concurrent fast jobs",
      "Access to member gallery",
      "Optional credit top ups",
    ],
    pro: [
      "30h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
    ],
  };

  return (
    <section className="flex items-end justify-center gap-[42px] px-[31px] py-0 relative w-full">
      {/* Free Trial Plan */}
      <Card className="flex flex-col w-[302px] items-center relative self-stretch bg-[#f6f6f6] rounded-[30px] overflow-hidden border border-solid border-[#1e2833]">
        <CardHeader className="flex flex-col items-start gap-4 px-6 py-8 relative self-stretch w-full">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Bold',Helvetica] font-bold text-[#1e2833] text-xl tracking-[0.40px] leading-[normal]">
            Free Trial
          </h3>

          <div className="flex items-center gap-2 relative self-stretch w-full">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-ExtraBold',Helvetica] font-extrabold text-[#1e2833] text-4xl tracking-[0.72px] leading-[normal]">
              ₹0
            </span>

            <div className="inline-flex justify-center gap-0.5 flex-col items-start relative">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-[normal]">
                per editor/month
              </span>

              <span className="relative w-fit [font-family:'Outfit-Regular',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-[normal]">
                billed yearly as ₹0
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-start gap-3 pt-0 pb-14 px-6 relative flex-1 self-stretch w-full">
          {planFeatures.freeTrial.map((feature, index) => (
            <div
              key={`free-${index}`}
              className="flex items-start gap-2 relative self-stretch w-full"
            >
              <div className="bg-neutral-2 relative w-4 h-4 rounded-lg flex items-center justify-center">
                <Check className="w-2 h-2 text-[#B9BEC1]" />
              </div>
              <span className="relative flex-1 mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-[#212121] text-sm tracking-[0] leading-4">
                {feature}
              </span>
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex flex-col gap-2.5 pt-0 pb-8 px-6 self-stretch w-full items-center">
          <Button
            variant="outline"
            className="w-60 h-[54px] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <span className="[font-family:'Outfit-Bold',Helvetica] font-bold text-[#1e2833] text-base leading-[26px] relative w-fit tracking-[0] whitespace-nowrap">
              Current Plan
            </span>
          </Button>
        </CardFooter>
      </Card>

      {/* Standard Plan */}
      <div className="flex w-[300px] items-start justify-center gap-2.5 pt-0 pb-[52px] px-0 relative mt-[-37.00px]">
        <div className="inline-flex items-start gap-2.5 p-2 relative bg-[#b1e1ff80] rounded-[32px] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
          <Card className="flex flex-col w-[300px] h-[526px] items-center relative rounded-[30px] shadow-lg bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)]">
            <CardHeader className="bg-transparent flex flex-col items-start gap-4 px-6 py-8 relative self-stretch w-full">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Bold',Helvetica] font-bold text-basicwhite text-xl tracking-[0.40px] leading-[normal]">
                Standard Plan
              </h3>

              <div className="flex items-center gap-2 relative self-stretch w-full">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Bold',Helvetica] font-bold text-basicwhite text-4xl tracking-[0.72px] leading-[normal]">
                  ₹24
                </span>

                <div className="inline-flex justify-center gap-0.5 flex-col items-start relative">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-neutral-4 text-xs tracking-[0] leading-[normal]">
                    per editor/month
                  </span>

                  <span className="relative w-fit [font-family:'Outfit-Regular',Helvetica] font-normal text-neutral-4 text-xs tracking-[0] leading-[normal]">
                    billed yearly as ₹288
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col items-start gap-3 pt-0 pb-14 px-6 relative flex-1 self-stretch w-full">
              {planFeatures.standard.map((feature, index) => (
                <div
                  key={`standard-${index}`}
                  className="flex items-start gap-2 relative self-stretch w-full"
                >
                  <div className="bg-white relative w-4 h-4 rounded-lg flex items-center justify-center">
                    <Check className="w-2 h-2 text-[#1E2833]" />
                  </div>
                  <span className="relative flex-1 mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-basicwhite text-sm tracking-[0] leading-4">
                    {feature}
                  </span>
                </div>
              ))}
            </CardContent>

            <Badge className="absolute top-6 right-6 bg-basicwhite text-[#181059] font-medium text-xs px-2 py-1.5 rounded-lg">
              Most Popular
            </Badge>

            <CardFooter className="flex flex-col gap-2.5 pt-0 pb-8 px-6 self-stretch w-full items-center">
              <Button className="w-60 h-[54px] bg-[#078dee] text-white font-bold">
                <span className="[font-family:'Outfit-Bold',Helvetica] font-bold text-base leading-[26px] relative w-fit tracking-[0] whitespace-nowrap">
                  Choose Plan
                </span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Pro Plan */}
      <Card className="flex flex-col w-[302px] items-center relative self-stretch bg-[#f6f6f6] rounded-[30px] overflow-hidden border border-solid border-[#1e2833]">
        <CardHeader className="flex flex-col items-start gap-4 px-6 py-8 relative self-stretch w-full">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Bold',Helvetica] font-bold text-[#1e2833] text-xl tracking-[0.40px] leading-[normal]">
            Pro Plan
          </h3>

          <div className="flex items-center gap-2 relative self-stretch w-full">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-ExtraBold',Helvetica] font-extrabold text-[#1e2833] text-4xl tracking-[0.72px] leading-[normal]">
              ₹48
            </span>

            <div className="inline-flex justify-center gap-0.5 flex-col items-start relative">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-[normal]">
                per editor/month
              </span>

              <span className="relative w-fit [font-family:'Outfit-Regular',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-[normal]">
                billed yearly as ₹576
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-start gap-3 pt-0 pb-14 px-6 relative flex-1 self-stretch w-full">
          {planFeatures.pro.map((feature, index) => (
            <div
              key={`pro-${index}`}
              className="flex items-start gap-2 relative self-stretch w-full"
            >
              <div className="bg-neutral-2 relative w-4 h-4 rounded-lg flex items-center justify-center">
                <Check className="w-2 h-2 text-[#B9BEC1]" />
              </div>
              <span className="relative flex-1 mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-[#212121] text-sm tracking-[0] leading-4">
                {feature}
              </span>
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex flex-col gap-2.5 pt-0 pb-8 px-6 self-stretch w-full items-center">
          <Button
            variant="outline"
            className="w-60 h-[54px] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <span className="[font-family:'Outfit-Bold',Helvetica] font-bold text-[#1e2833] text-base leading-[26px] relative w-fit tracking-[0] whitespace-nowrap">
              Choose Plan
            </span>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SubscriptionDetailsSection;
