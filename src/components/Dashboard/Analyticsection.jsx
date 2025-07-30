import { Card, CardContent } from "../ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

export default function AnalyticsSection() {
  // Data for analytics cards
  const analyticsCards = [
    {
      title: "Total Profit & Loss",
      value: "25000",
      trend: "+8.2%",
      trendUp: true,
      color: "primary",
      bgGradient:
        "bg-[linear-gradient(135deg,rgba(200,250,214,1)_0%,rgba(91,228,155,1)_100%)]",
      textColor: "text-core-colors-primary-darker",
      iconColor: "#004B50",
      sparklineColor: "#007867",
    },
    {
      title: "Total Trades",
      value: "12",
      trend: "-86.6%",
      trendUp: false,
      color: "secondary",
      bgGradient:
        "bg-[linear-gradient(135deg,rgba(239,214,255,1)_0%,rgba(198,132,255,1)_100%)]",
      textColor: "text-core-colors-secondary-darker",
      iconColor: "#5119B7",
      sparklineColor: "#5119B7",
    },
    {
      title: "Total Wins",
      value: "8",
      trend: "+73.9%",
      trendUp: true,
      color: "warning",
      bgGradient:
        "bg-[linear-gradient(135deg,rgba(255,245,204,1)_0%,rgba(255,214,102,1)_100%)]",
      textColor: "text-core-colors-warning-darker",
      iconColor: "#7A4100",
      sparklineColor: "#B76E00",
    },
  ];

  // Simple sparkline SVG component
  const SparklineSVG = ({ color }) => (
    <svg
      width="74.5"
      height="48"
      viewBox="0 0 74.5 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-[-1.25px]"
    >
      <path
        d="M1 36C5.5 36 7.5 24 12 24C16.5 24 18.5 30 23 30C27.5 30 29.5 12 34 12C38.5 12 40.5 24 45 24C49.5 24 51.5 6 56 6C60.5 6 62.5 18 67 18C71.5 18 73.5 36 73.5 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex flex-wrap gap-[var(--core-spacing-spacing-3)] w-full">
      {analyticsCards.map((card, index) => (
        <Card
          key={index}
          className="flex-1 min-w-[252px] overflow-hidden relative"
        >
          <div className="absolute w-full h-[114px] top-0 left-0 bg-core-colors-white-main rounded-[var(--core-components-card-radius-duplicate)] overflow-hidden">
            <div className={`${card.bgGradient} h-[114px] opacity-[0.48]`} />
          </div>

          <img
            className="absolute w-[220px] h-[114px] top-0 left-0"
            alt="Background shape"
            src=""
          />

          <div className="inline-flex items-center justify-center gap-[var(--core-spacing-spacing-0-5-duplicate)] absolute top-4 right-4">
            {card.trendUp ? (
              <TrendingUp className="w-5 h-5" color={card.iconColor} />
            ) : (
              <TrendingDown className="w-5 h-5" color={card.iconColor} />
            )}
            <div
              className={`mt-[-1.00px] font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] ${card.textColor} text-[length:var(--subtitle-2-font-size)] leading-[var(--subtitle-2-line-height)] tracking-[var(--subtitle-2-letter-spacing)] whitespace-nowrap [font-style:var(--subtitle-2-font-style)]`}
            >
              {card.trend.replace("+", "")}
            </div>
          </div>

          <CardContent className="pt-[var(--core-components-card-content-p-duplicate)] pr-[var(--core-components-card-content-p-duplicate)] pb-[var(--core-components-card-content-p-duplicate)] pl-[var(--core-components-card-content-p-duplicate)]">
            <div className="flex items-end justify-end relative self-stretch w-full">
              <div className="flex flex-col items-start gap-[var(--core-spacing-spacing-1)] relative flex-1 grow">
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold ${card.textColor} text-sm tracking-[0] leading-[22px] whitespace-nowrap`}
                >
                  {card.title}
                </div>
                <div
                  className={`[font-family:'Outfit-Bold',Helvetica] font-bold ${card.textColor} text-[32px] leading-9 relative w-fit tracking-[0] whitespace-nowrap`}
                >
                  {card.value}
                </div>
              </div>

              <SparklineSVG color={card.sparklineColor} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
