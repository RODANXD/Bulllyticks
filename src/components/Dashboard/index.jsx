import React from "react";
import AnalyticsSection from "./Analyticsection";
import NiftyStrategySection from "./Niftysection";
import AppSummarySection from "./Appsumary";
import SignalsSection from "./SignalSection";

export default function VerticalContainer() {
  return (
    <main className="flex flex-col w-[var(--layout-container-vertical-width)] items-start justify-center gap-[var(--core-spacing-spacing-3)] px-[var(--layout-container-vertical-px)] pb-[var(--layout-container-vertical-py)] pt-10">
      <AnalyticsSection />
      <NiftyStrategySection />
      <AppSummarySection />
      <SignalsSection />
    </main>
  );
}
