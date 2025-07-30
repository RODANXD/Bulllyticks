import React from "react";

export default function FeaturesSection() {
  // Data for the steps
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Register with email or mobile and set up 2FA.",
      bgColor: "bg-[#f54b4b]",
    },
    {
      number: 2,
      title: "Link Broker",
      description: "Connect your trading account using secure OTP.",
      bgColor: "bg-[#1e2833]",
    },
    {
      number: 3,
      title: "Start Algo",
      description: "Click Start to begin auto-trading via Bulyticks.",
      bgColor: "bg-[#473bf0]",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[52px] py-9 w-full">
      <h2 className="font-semibold text-[32px] text-center tracking-[-0.20px] leading-8 text-black [font-family:'Outfit-SemiBold',Helvetica]">
        HOW IT WORKS
      </h2>

      <div className="flex justify-center w-full">
        <div className="relative flex items-start justify-between max-w-[1009px] w-full">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div className="flex flex-col items-center w-[253px]">
                {/* Numbered Circle */}
                <div className="w-[73px] h-[73px] mb-[46px] overflow-hidden">
                  <div
                    className={`${step.bgColor} w-[75px] h-[75px] -ml-px -mt-px rounded-[37.5px] flex items-center justify-center`}
                  >
                    <span className="[font-family:'Gilroy-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[-1.20px] leading-[48px]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="[font-family:'Outfit-Bold',Helvetica] font-bold text-[#1e2833] text-2xl text-center tracking-[-0.50px] leading-8 mb-5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="[font-family:'Outfit-Regular',Helvetica] font-normal text-[#1e2833] text-[22px] text-center tracking-[0] leading-[29px]">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (only between steps, not after the last one) */}
              {index < steps.length - 1 && (
                <div className="h-[3px] w-[343px] bg-[#e5e5e5] mt-[35px] flex-shrink-0 self-start">
                  <div
                    className={`h-full ${index === 0 ? "w-full bg-[#e5e5e5]" : "w-full bg-[#e5e5e5]"}`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
