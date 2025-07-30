import React from "react";
import AddBrokerSection from "./Addbroker";
import BreadcrumbSection from "./breadcrumbing";
import BrokerListingSection from "./BrokerListing";

export default function VerticalContainer() {
  return (
    <main className="flex flex-col w-full max-w-[var(--layout-container-vertical-width)] items-start justify-center gap-[var(--core-spacing-spacing-5)] px-[var(--layout-container-vertical-px)] pb-[var(--layout-container-vertical-py)] pt-10">
      <BreadcrumbSection />
      <AddBrokerSection />
      <BrokerListingSection />
    </main>
  );
}
