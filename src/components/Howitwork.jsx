import { Button } from "./ui/button";
import { PlayCircle } from "lucide-react";
import React from "react";

export default function HowItWorksSection() {
  // Stats data for mapping
  const stats = [
    { text: "1,00,000+ Signals Processed" },
    { text: "2,500+ Traders Onboard" },
    { text: "99.9% Uptime" },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-7 px-4">
        <div className="flex flex-col items-center justify-center gap-7 w-full">
          <div className="flex flex-col justify-center gap-px w-full items-center">
            <h1 className="text-center font-medium text-[#313131] text-[51px] [font-family:'Outfit-Medium',Helvetica]">
              Built to Help You Trade Better, Faster, and Smarter
            </h1>
          </div>

          <p className="text-center font-normal text-[#393939] text-2xl leading-[30px] max-w-3xl [font-family:'Outfit-Regular',Helvetica]">
            Welcome to Bulyticks – your AI-powered trading companion delivering
            reliable trade signals and seamless automation through one secure
            dashboard.
          </p>

          <div className="flex flex-col justify-center gap-2 items-center">
            <div className="flex items-start gap-6">
              <Button className="h-[54px] w-60 rounded-md font-bold text-base [font-family:'Outfit-Bold',Helvetica] bg-gradient-to-r from-[rgba(0,92,137,1)] to-[rgba(1,47,70,1)]">
                Start Free Trial
              </Button>

              <Button
                variant="outline"
                className="h-[54px] w-[136px] rounded-md font-bold text-base text-[#1e2833] border-[#1e28337a] [font-family:'Outfit-Bold',Helvetica]"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-[3px] bg-white rounded-2xl border border-solid border-[#0000001a]">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-[18px] h-[18px] bg-[#ff8103] rounded-md" />
                <span className="font-medium text-[#212121] text-base text-center tracking-[-0.30px] leading-[48px] whitespace-nowrap [font-family:'Outfit-Medium',Helvetica]">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[1223px] h-[585px] mt-8 rounded-3xl overflow-hidden bg-[url(/image-2.png)] bg-cover bg-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-[68px] text-white hover:bg-white/10"
              aria-label="Play video"
            >
              <PlayCircle className="h-12 w-12" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
