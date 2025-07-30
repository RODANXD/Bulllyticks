import React from 'react'
import ContactFormSection from '../components/Contactform'
import FeaturesSection from '../components/Featuresection'
import HeroSection from '../components/Herosection'
import PricingPlansSection from '../components/Pricing'
import ServicesSection from '../components/Service'
import HowItWorksSection from '../components/Howitwork'

export default function LandingPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="relative w-full">
        {/* Gradient blur effect */}
        <div className="absolute w-[347px] h-[354px] top-[629px] right-[40px] rounded-[var(--core-components-button-radius)] blur-[196.5px] bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] opacity-50" />

        {/* Main content sections */}
        <HeroSection />
        <HowItWorksSection />
        <ServicesSection />
        <FeaturesSection />
        <PricingPlansSection />
        <ContactFormSection />

        {/* Footer */}
        <footer className="w-full bg-[#1c252e] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white text-black px-6 py-1 mb-4">
                <span className="text-sm font-semibold">Logo</span>
              </div>
              <p className="text-xs text-center">
                Deliver amazing experiences around the world
              </p>
            </div>

            <div className="flex justify-center space-x-8 mb-6 text-sm">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                About Us
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </div>

            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" aria-label="Facebook">
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <span className="sr-only">Facebook</span>
                </div>
              </a>
              <a href="#" aria-label="Twitter">
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <span className="sr-only">Twitter</span>
                </div>
              </a>
              <a href="#" aria-label="Instagram">
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <span className="sr-only">Instagram</span>
                </div>
              </a>
            </div>

            <div className="text-center text-xs">
              <p>© 2023 All Rights Reserved by Your Company</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

