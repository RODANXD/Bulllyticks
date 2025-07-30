import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Info, Paperclip } from "lucide-react";
import React from "react";

export default function ContactFormSection() {
  // Form field data
  const formFields = [
    { id: "name", placeholder: "Name" },
    { id: "email", placeholder: "Email" },
    { id: "subject", placeholder: "Subject" },
  ];

  return (
    <div className="flex justify-center items-center py-14 w-full">
      <Card className="w-full max-w-[704px] rounded-3xl bg-white">
        <CardContent className="flex flex-col items-center gap-6 p-8">
          <p className="text-2xl text-[#1e2833] leading-[48px]">
            Got questions, feedback, or looking for a custom trading solution?{" "}
            <span className="font-bold">We'd love to hear from you.</span>
          </p>

          <div className="flex flex-col items-start gap-3 w-full">
            {formFields.map((field) => (
              <div key={field.id} className="w-full">
                <Input
                  placeholder={field.placeholder}
                  className="h-[var(--core-components-textfield-outlined-md-height)] rounded-[var(--core-components-textfield-outlined-radius)] border-theme-components-textfield-outline-duplicate text-[#212121] text-[15px] leading-[22px]"
                />
              </div>
            ))}

            <div className="flex flex-col gap-[7px] w-full">
              <Textarea
                placeholder="Enter your message here"
                className="min-h-[var(--core-components-textarea-min-height)] rounded-[var(--core-components-textfield-outlined-radius)] border-theme-components-textfield-outline-duplicate text-[#212121] text-[15px] leading-[22px]"
              />

              <div className="flex flex-col w-full">
                <div className="flex items-center h-[var(--core-components-textfield-outlined-md-height)] rounded-[var(--core-components-textfield-outlined-radius)] px-[var(--core-components-textfield-outlined-px)]">
                  <div className="inline-flex items-center pr-[var(--core-components-textfield-start-adornment-mr)]">
                    <div className="flex w-6 h-6 items-center justify-center">
                      <Paperclip className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 text-[#212121] text-[15px] leading-[22px] overflow-hidden text-ellipsis">
                    Add attachments
                  </div>
                </div>

                <div className="flex items-center gap-[var(--core-components-form-helper-text-spacing-duplicate)] pt-[var(--core-components-form-helper-text-pt-duplicate)] pl-[var(--core-components-form-helper-text-pl-duplicate)]">
                  <Info className="w-4 h-4" />
                  <div className="flex-1 font-caption text-[#454545] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)]">
                    Only accepts .pdf, .docx, .png, .jpg and upto 5 MB
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <Button
              variant="outline"
              className="w-[223px] h-[var(--core-components-button-lg-height)] rounded-[var(--core-components-button-radius)] border-theme-components-button-outlined text-[#1e2833] font-components-button-large"
            >
              Cancel
            </Button>
            <Button className="w-[223px] h-[var(--core-components-button-lg-height)] rounded-[var(--core-components-button-radius)] bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] text-theme-global-inherit-color font-components-button-large">
              Send message
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
