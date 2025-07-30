import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { ChevronDown, Settings } from "lucide-react";
import React from "react";

// Data for footer navigation links
const footerLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Payment & Refund Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

// Data for social media links
const socialLinks = [
  { icon: "facebook", href: "#" },
  { icon: "twitter", href: "#" },
  { icon: "instagram", href: "#" },
];

export default function Login() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Header */}
      <header className="flex w-full h-[72px] items-center justify-end border border-solid border-[#0000000d]">
        <div className="flex items-center justify-end pr-6 pl-6 w-full">
          <div className="inline-flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 rounded-full"
            >
              <Settings className="w-5 h-5" />
            </Button>
            <span className="font-subtitle-2 font-semibold text-[#1e2833] text-sm">
              Need help?
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center py-16">
        <Card className="border border-solid border-[#dadada] rounded-2xl overflow-hidden">
          <CardContent className="p-12">
            <div className="flex flex-col w-[420px] items-start gap-2.5">
              <div className="flex flex-col max-w-[420px] items-start gap-10 w-full rounded-[16px]">
                <div className="flex flex-col items-center gap-[69px] w-full">
                  {/* Logo */}
                  <div className="relative w-[231px] h-[72px] bg-[#e0e0e0] flex items-center justify-center">
                    <div className="font-bold text-black text-[33.7px] leading-[53px]">
                      Logo
                    </div>
                  </div>

                  {/* Welcome Text */}
                  <div className="flex flex-col items-start w-full">
                    <h2 className="font-bold text-[#1e2833] text-xl leading-[30px]">
                      Welcome Back
                    </h2>
                    <p className="text-theme-text-secondary-duplicate text-sm leading-[22px]">
                      Secure login to access your dashboard
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col items-center gap-6 w-full">
                  {/* Phone Input */}
                  <div className="relative w-full">
                    <div className="flex h-[54px] items-center border border-solid border-theme-components-textfield-outline-duplicate rounded-[8px] px-[14px]">
                      <div className="flex items-center gap-[5px]">
                        <Select defaultValue="+91">
                          <SelectTrigger className="border-0 p-0 h-auto w-auto shadow-none">
                            <SelectValue
                              placeholder="+91"
                              className="opacity-50 text-[15px]"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                          </SelectContent>
                        </Select>
                        <ChevronDown className="w-4 h-4" />
                        <div className="w-px h-full bg-gray-200"></div>
                      </div>
                      <Input
                        className="border-0 shadow-none pl-4 opacity-50 text-[15px]"
                        placeholder="000 000 000"
                      />
                      <div className="absolute -top-[5px] left-3.5 px-[2px] bg-white">
                        <span className="text-xs font-medium text-theme-text-secondary-duplicate leading-3">
                          Mobile Number
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <Button className="w-full h-12 bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] rounded-[8px] text-[15px] font-semibold">
                    Verify
                  </Button>

                  {/* Divider */}
                  <div className="flex items-center w-full">
                    <Separator className="flex-grow" />
                    <span className="px-2.5 font-bold text-theme-text-disabled-duplicate text-xs text-center">
                      OR
                    </span>
                    <Separator className="flex-grow" />
                  </div>

                  {/* Alternative Login Options */}
                  <div className="flex flex-col items-center gap-6 w-full">
                    {/* Google Button */}
                    <Button
                      variant="outline"
                      className="w-full h-12 gap-3 rounded-xl border-theme-color-neutral-neutral-300 bg-additionalwhite"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8055 10.2275C19.8055 9.51169 19.7485 8.79587 19.6345 8.10156H10.2002V11.8883H15.6016C15.3736 13.1913 14.6571 14.293 13.5554 15.0203V17.5219H16.7793C18.6628 15.7699 19.8055 13.2683 19.8055 10.2275Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2002 20.0001C12.897 20.0001 15.1716 19.1139 16.7793 17.5219L13.5554 15.0203C12.6692 15.6227 11.5105 15.9648 10.2002 15.9648C7.5605 15.9648 5.30738 14.1842 4.52668 11.7397H1.20508V14.3269C2.80738 17.6649 6.2907 20.0001 10.2002 20.0001Z"
                          fill="#34A853"
                        />
                        <path
                          d="M4.52661 11.7397C4.32959 11.1373 4.21558 10.4999 4.21558 9.84778C4.21558 9.19565 4.32959 8.55827 4.52661 7.95587V5.36865H1.20501C0.556883 6.66168 0.200195 8.11442 0.200195 9.84778C0.200195 11.5811 0.556883 13.0339 1.20501 14.3269L4.52661 11.7397Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2002 3.73081C11.6815 3.73081 13.0031 4.24022 14.0478 5.24219L16.9098 2.38021C15.1673 0.752893 12.8927 -0.00012207 10.2002 -0.00012207C6.2907 -0.00012207 2.80738 2.33509 1.20508 5.67309L4.52668 8.2603C5.30738 5.81581 7.5605 3.73081 10.2002 3.73081Z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span className="font-semibold text-[#1e2833]">
                        Google
                      </span>
                    </Button>

                    {/* Email Login Link */}
                    <button className="font-bold text-[#212121] text-base underline">
                      Login via Email
                    </button>

                    {/* Register Link */}
                    <div className="flex items-center gap-1.5">
                      <span className="font-normal text-[#212121] text-base">
                        Don't have an account?
                      </span>
                      <button className="font-bold text-[#212121] text-base underline">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className=" w-full bg-[#1e2833] text-white py-10">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo */}
          <div className="w-[231px] h-[72px] bg-[#e0e0e0] flex items-center justify-center">
            <span className="font-bold text-black text-[33.7px]">Logo</span>
          </div>

          {/* Tagline */}
          <p className="text-center text-white max-w-md">
            Smarter trading starts here — powered by data, logic, and trust.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-4">
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm mt-4">
            <p>© 2025 Bullytics | All rights reserved.</p>
            <p className="mt-2">Made with ❤ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
