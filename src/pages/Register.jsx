import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import React from "react";

export default function Register() {
  // Form field data
  const formFields = [
    { id: "fullName", label: "Full Name", placeholder: "Enter your full name" },
    {
      id: "email",
      label: "Email Address",
      placeholder: "Enter email address.",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "6+ characters",
      hasEyeIcon: true,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      placeholder: "************",
      hasEyeIcon: true,
      eyeOff: true,
    },
  ];

  return (
    <>
     <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-[420px] border-0 shadow-none">
        <CardContent className="flex flex-col items-start gap-[var(--core-spacing-spacing-5)] p-0"></CardContent>
    
    
    <header className="flex flex-col items-center gap-3 w-full">
      <div className="relative w-[231px] h-[72px] bg-[#e0e0e0] flex items-center justify-center">
        <h1 className="font-bold text-black text-[33.7px] leading-[53px]">
          Logo
        </h1>
      </div>

      <div className="flex flex-col items-start w-full">
        <h2 className="text-xl font-bold text-[#1e2833] leading-[30px]">
          Create Your Account
        </h2>

        <div className="flex items-center w-full gap-0.5">
          <p className="text-sm font-normal text-theme-text-secondary-duplicate leading-[22px]">
            Start your journey into smarter trading
          </p>
        </div>
      </div>
    </header>
    <div className="flex flex-col items-center gap-[var(--core-spacing-spacing-3)] relative self-stretch w-full">
      <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
        {/* Full Name Field */}
        {formFields.slice(0, 2).map((field) => (
          <div
            key={field.id}
            className="flex flex-col items-start relative self-stretch w-full"
          >
            <div className="relative w-full">
              <Input
                className="h-[var(--core-components-textfield-outlined-md-height)] px-[var(--core-components-textfield-outlined-px)] rounded-[var(--core-components-textfield-outlined-radius)] border-theme-components-textfield-outline-duplicate"
                placeholder={field.placeholder}
              />
              <div className="inline-flex items-center px-[var(--core-spacing-spacing-2px)] absolute top-[-5px] left-3.5">
                <div
                  className={`absolute h-0.5 top-[5px] left-0 bg-theme-background-paper-duplicate ${field.id === "fullName" ? "w-[58px]" : "w-20"}`}
                />
                <div className="relative w-fit mt-[-1.00px] font-medium text-theme-text-secondary-duplicate text-xs leading-3 whitespace-nowrap [font-family:'Outfit-Medium',Helvetica]">
                  {field.label}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Number Field */}
        <div className="flex flex-col items-start relative self-stretch w-full">
          <div className="flex h-[var(--core-components-textfield-outlined-md-height)] items-center relative self-stretch w-full rounded-[var(--core-components-textfield-outlined-radius)] border border-solid border-theme-components-textfield-outline-duplicate">
            <div className="flex items-center gap-[5px] pl-[var(--core-components-textfield-outlined-px)]">
              <Select>
                <SelectTrigger className="w-fit border-0 p-0 h-auto shadow-none">
                  <SelectValue placeholder="+91" />
                  <ChevronDown className="w-4 h-4 ml-1" />
                </SelectTrigger>
              </Select>
              <div className="relative self-stretch w-px h-full bg-gray-300" />
            </div>

            <Input
              className="border-0 flex-1 h-full shadow-none"
              placeholder="000 000 000"
            />

            <div className="inline-flex items-center px-[var(--core-spacing-spacing-2px)] absolute top-[-5px] left-3.5">
              <div className="w-[86px] absolute h-0.5 top-[5px] left-0 bg-theme-background-paper-duplicate" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Medium',Helvetica] font-medium text-theme-text-secondary-duplicate text-xs leading-3 whitespace-nowrap">
                Mobile Number
              </div>
            </div>
          </div>
        </div>

        {/* Password Fields */}
        {formFields.slice(2, 4).map((field) => (
          <div
            key={field.id}
            className="flex flex-col items-start relative self-stretch w-full"
          >
            <div className="relative w-full">
              <Input
                type="password"
                className="h-[var(--core-components-textfield-outlined-md-height)] px-[var(--core-components-textfield-outlined-px)] rounded-[var(--core-components-textfield-outlined-radius)] border-theme-components-textfield-outline-duplicate"
                placeholder={field.placeholder}
              />
              <div className="inline-flex items-center px-[var(--core-spacing-spacing-2px)] absolute top-[-5px] left-3.5">
                <div
                  className={`absolute h-0.5 top-[5px] left-0 bg-theme-background-paper-duplicate ${field.id === "password" ? "w-14" : "w-[102px]"}`}
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Medium',Helvetica] font-medium text-theme-text-secondary-duplicate text-xs leading-3 whitespace-nowrap">
                  {field.label}
                </div>
              </div>
              <div className="inline-flex h-6 items-center justify-center absolute top-[15px] right-3">
                {field.eyeOff ? (
                  <EyeOff className="w-6 h-6" />
                ) : (
                  <Eye className="w-6 h-6" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sign Up Button */}
      <Button className="min-w-[var(--core-components-button-min-width)] h-[var(--core-components-button-lg-height)] px-[var(--core-components-button-lg-px)] py-0 self-stretch w-full rounded-[var(--core-components-button-radius)] bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)]">
        <span className="[font-family:'Outfit-SemiBold',Helvetica] font-semibold text-[color:var(--theme-global-inherit-color)] text-[15px] leading-[26px] whitespace-nowrap">
          Sign Up
        </span>
      </Button>

      {/* Terms and Privacy Policy */}
      <div className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-theme-text-secondary-duplicate text-xs text-center leading-[18px]">
        <span className="text-[#637381] font-caption [font-style:var(--caption-font-style)] font-[number:var(--caption-font-weight)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] text-[length:var(--caption-font-size)]">
          By signing up, I agree to{" "}
        </span>
        <span className="text-[#1e2833] underline font-underline-caption [font-style:var(--underline-caption-font-style)] font-[number:var(--underline-caption-font-weight)] tracking-[var(--underline-caption-letter-spacing)] leading-[var(--underline-caption-line-height)] text-[length:var(--underline-caption-font-size)]">
          terms of use
        </span>
        <span className="text-[#1e2833] font-caption [font-style:var(--caption-font-style)] font-[number:var(--caption-font-weight)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] text-[length:var(--caption-font-size)]">
          &nbsp;
        </span>
        <span className="text-[#637381] font-caption [font-style:var(--caption-font-style)] font-[number:var(--caption-font-weight)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] text-[length:var(--caption-font-size)]">
          and
        </span>
        <span className="text-[#1e2833] font-caption [font-style:var(--caption-font-style)] font-[number:var(--caption-font-weight)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] text-[length:var(--caption-font-size)]">
          &nbsp;
        </span>
        <span className="text-[#1e2833] underline font-underline-caption [font-style:var(--underline-caption-font-style)] font-[number:var(--underline-caption-font-weight)] tracking-[var(--underline-caption-letter-spacing)] leading-[var(--underline-caption-line-height)] text-[length:var(--underline-caption-font-size)]">
          privacy policy
        </span>
        <span className="text-[#1e2833] font-caption [font-style:var(--caption-font-style)] font-[number:var(--caption-font-weight)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] text-[length:var(--caption-font-size)]">
          .
        </span>
      </div>

      {/* OR Divider */}
      <div className="flex items-center justify-center relative self-stretch w-full">
        <Separator className="flex-1 h-[1px]" />
        <div className="relative w-10 [font-family:'Outfit-Bold',Helvetica] font-bold text-theme-text-disabled-duplicate text-xs text-center mx-2">
          OR
        </div>
        <Separator className="flex-1 h-[1px]" />
      </div>

      {/* Google Sign Up Button */}
      <Button
        variant="outline"
        className="h-12 justify-center gap-3 self-stretch w-full bg-additionalwhite rounded-xl border-theme-color-neutral-neutral-300"
      >
        <img src="" alt="Google" className="w-5 h-5" />
        <div className="relative w-fit font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-[#1e2833] text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
          Google
        </div>
      </Button>

      {/* Login Link */}
      <div className="relative self-stretch [font-family:'Urbanist-Bold',Helvetica] font-bold text-[#212121] text-base text-center leading-[22px]">
        <span className="[font-family:'Urbanist-Bold',Helvetica] font-bold text-[#212121] text-base leading-[22px]">
          Already have an account?
        </span>
        <span className="underline"> Login</span>
      </div>
    </div>
    <CardContent/>
    </Card>
    </div>
    
    </>
  );
}
