import { Card, CardContent } from "./ui/card";
import { Bell, Cpu, FileText } from "lucide-react";
import React from "react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Bell className="w-12 h-12 text-white" />,
      title: "Trade Signal",
      description:
        "Get real-time AI alerts to help you trade smarter and faster. Customize filters based on your strategy and stay updated with instant mobile notifications.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-white" />,
      title: "Algo Trades",
      description:
        "Automate your strategies with broker integration and 24/7 execution. Just connect your broker and let the system handle your trades in real-time.",
    },
    {
      icon: (
        <FileText className="w-12 h-12 text-white bg-white p-2 rounded-3xl text-[#1e2833]" />
      ),
      title: "Strategy Marketplace",
      description:
        "Discover and deploy ready-made strategies built by expert traders. All strategies are tested, verified, and can be launched with a single click.",
    },
  ];

  return (
    <section className="bg-[#1e2833] py-12 px-6 md:px-16 lg:px-24 w-full">
      <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-0.5 text-center w-full">
          <h2 className="font-semibold text-white text-3xl md:text-4xl tracking-tight leading-tight mt-[-1.00px] font-['Outfit-SemiBold',Helvetica]">
            OUR SERVICES
          </h2>
          <p className="text-white text-xl md:text-2xl font-normal leading-relaxed font-['Outfit-Regular',Helvetica]">
            From real-time alerts to fully automated executions — explore two
            powerful ways to elevate your trading game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#ffffff0d] border border-white text-white rounded-2xl overflow-hidden"
            >
              <CardContent className="flex flex-col items-center justify-center gap-5 p-6">
                <div className="flex flex-col items-center gap-2 pt-2">
                  <div className="w-[66px] h-[66px] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-[22px] text-center font-['Outfit-SemiBold',Helvetica]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base text-center font-normal font-['Outfit-Regular',Helvetica]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
