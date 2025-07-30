import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Check } from "lucide-react";
import React from "react";

const PricingPlansSection = () => {
  // Plan data for easier mapping and maintenance
  const plans = [
    {
      name: "Free Trial",
      price: "₹0",
      current: true,
      popular: false,
      billingInfo: {
        period: "per editor/month",
        yearly: "billed yearly as ₹0",
      },
      features: [
        "30h Fast generations",
        "Unlimited Relaxed generations",
        "General commercial terms",
        "Access to member gallery",
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline",
      cardStyle: "bg-[#f6f6f6] border border-solid border-[#1e2833]",
    },
    {
      name: "Standard Plan",
      price: "₹24",
      current: false,
      popular: true,
      billingInfo: {
        period: "per editor/month",
        yearly: "billed yearly as ₹288",
      },
      features: [
        "15h Fast generations",
        "Unlimited Relaxed generations",
        "General commercial terms",
        "Access to member gallery",
        "Optional credit top ups",
        "3 concurrent fast jobs",
        "Access to member gallery",
        "Optional credit top ups",
      ],
      buttonText: "Choose Plan",
      buttonVariant: "default",
      cardStyle:
        "bg-gradient-to-r from-[rgba(0,92,137,1)] to-[rgba(1,47,70,1)] text-white",
    },
    {
      name: "Pro Plan",
      price: "₹48",
      current: false,
      popular: false,
      billingInfo: {
        period: "per editor/month",
        yearly: "billed yearly as ₹576",
      },
      features: [
        "30h Fast generations",
        "Unlimited Relaxed generations",
        "General commercial terms",
        "Access to member gallery",
        "Optional credit top ups",
      ],
      buttonText: "Choose Plan",
      buttonVariant: "outline",
      cardStyle: "bg-[#f6f6f6] border border-solid border-[#1e2833]",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[103px] pt-9 pb-16 px-6 md:px-[121px] relative w-full bg-[#1e2833]">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center gap-0.5 w-full">
        <h2 className="font-semibold text-white text-[32px] text-center tracking-[-1.80px] leading-[58px] [font-family:'Outfit-SemiBold',Helvetica]">
          PRICING &amp; PLANS
        </h2>
        <p className="max-w-[861px] font-normal text-white text-2xl text-center tracking-[0] leading-[30px] [font-family:'Outfit-Regular',Helvetica]">
          From real-time alerts to fully automated executions — explore two
          powerful ways to elevate your trading game.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[42px] w-full">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative ${index === 1 ? "md:mt-[-55px]" : ""}`}
          >
            {/* Wrapper for the popular plan with glow effect */}
            <div
              className={`${index === 1 ? "p-2 bg-[#b1e1ff80] rounded-[32px] backdrop-blur-[2px]" : ""}`}
            >
              <Card
                className={`w-[300px] rounded-[30px] overflow-hidden ${plan.cardStyle}`}
              >
                {plan.popular && (
                  <Badge className="absolute top-6 right-6 bg-white text-[#181059] font-medium text-xs">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="px-6 py-8">
                  <h3
                    className={`font-bold text-xl tracking-[0.40px] ${index === 1 ? "text-basicwhite" : "text-[#1e2833]"} [font-family:'Outfit-Bold',Helvetica]`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-4">
                    <span
                      className={`font-extrabold text-4xl tracking-[0.72px] ${index === 1 ? "text-basicwhite [font-family:'Inter-ExtraBold',Helvetica]" : "text-[#1e2833] [font-family:'Outfit-ExtraBold',Helvetica]"}`}
                    >
                      {plan.price}
                    </span>
                    <div className="flex flex-col items-start justify-center gap-0.5">
                      <span
                        className={`text-xs ${index === 1 ? "text-neutral-4 [font-family:'Inter-Regular',Helvetica]" : "text-[#666666] [font-family:'Outfit-Regular',Helvetica]"}`}
                      >
                        {plan.billingInfo.period}
                      </span>
                      <span
                        className={`text-xs ${index === 1 ? "text-neutral-4 [font-family:'Inter-Regular',Helvetica]" : "text-[#666666] [font-family:'Outfit-Regular',Helvetica]"}`}
                      >
                        {plan.billingInfo.yearly}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-14 pt-0 flex-1">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={`${plan.name}-feature-${featureIndex}`}
                        className="flex items-start gap-2"
                      >
                        <div
                          className={`relative w-4 h-4 rounded-lg ${index === 1 ? "bg-white" : "bg-neutral-2"}`}
                        >
                          <Check
                            className="absolute w-2 h-2 top-1 left-1"
                            color={index === 1 ? "#1E2833" : "#B9BEC1"}
                          />
                        </div>
                        <span
                          className={`flex-1 text-sm leading-4 ${
                            index === 1
                              ? "text-basicwhite font-medium [font-family:'Inter-Medium',Helvetica]"
                              : "text-[#212121] font-normal [font-family:'Outfit-Regular',Helvetica]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="px-6 pb-8 pt-0 flex justify-center">
                  {plan.buttonVariant === "default" ? (
                    <Button className="w-60 h-[54px] bg-[#078dee] text-theme-global-inherit-color font-bold text-base [font-family:'Outfit-Bold',Helvetica]">
                      {plan.buttonText}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-60 h-[54px] font-bold text-[#1e2833] text-base [font-family:'Outfit-Bold',Helvetica] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                    >
                      {plan.buttonText}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlansSection;
