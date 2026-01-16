"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Typography from "../ui/Typography";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup } from "@/components/ui/field";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingInput = ({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="border-muted-foreground/40 focus-within:border-foreground relative border-b py-2 transition-colors">
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 text-[10px] tracking-widest uppercase transition-all duration-200",
          focused || value
            ? "text-foreground/40 -top-2"
            : "text-foreground/60 top-3 text-lg",
        )}
      >
        {label}
        {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="font-body block w-full border-none bg-transparent px-0 py-1 text-lg outline-none focus:ring-0"
      />
    </div>
  );
};

export default function CallForVisit() {
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = days[new Date().getDay()];

  const officeHours = [
    { day: "Mon", time: "08:00 am – 07:00 pm" },
    { day: "Tue", time: "08:00 am – 07:00 pm" },
    { day: "Wed", time: "08:00 am – 07:00 pm" },
    { day: "Thu", time: "08:00 am – 07:00 pm" },
    { day: "Fri", time: "08:00 am – 07:00 pm" },
    { day: "Sat", time: "08:00 am – 07:00 pm" },
    { day: "Sun", time: "08:00 am – 07:00 pm" },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              className="text-foreground font-light tracking-[0.3em] uppercase"
            >
              Call or Visit
            </Typography>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Typography variant="h3" className="text-foreground/90 font-normal">
              Send Message
            </Typography>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
              <FieldGroup className="gap-10">
                <FloatingInput id="name" label="Name" />
                <FloatingInput id="email" label="Email" type="email" required />

                <Field className="relative">
                  <label className="text-foreground/80 text-[10px] tracking-widest uppercase">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    className="border-muted-foreground/40 focus-visible:border-foreground min-h-37.5 resize-none rounded-none border-x-0 border-t-0 border-b px-0 transition-colors focus-visible:ring-0"
                  />
                </Field>

                <div className="flex justify-center pt-4">
                  <Button className="text-foreground/70 rounded-full bg-gray-200 px-12 py-6 font-bold tracking-widest uppercase transition-all hover:bg-gray-300">
                    Send
                  </Button>
                </div>

                <div className="flex justify-center">
                  <Typography variant="small">
                    This site is protected by reCAPTCHA and the Google
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                    and
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {" "}
                      Terms of Service{" "}
                    </a>
                    apply.
                  </Typography>
                </div>
              </FieldGroup>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=14259412560&text&type=phone_number&app_absent=0"
              className="text-primary-foreground flex w-fit items-center gap-4 rounded-full bg-[#4a5568] px-10 py-3 hover:bg-[#2d3748]"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="whatsapp"
                width={50}
                height={50}
              />
              <Typography variant="p" className="font-bold">
                Message us on WhatsApp
              </Typography>
            </a>

            <div className="space-y-8">
              <Typography
                variant="h3"
                className="text-foreground tracking-wider uppercase"
              >
                Marci Metzger - THE RIDGE REALTY GROUP
              </Typography>
              <div className="text-foreground/70 space-y-4 leading-relaxed tracking-wide">
                <Typography variant="p">
                  3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                </Typography>
                <a href="tel:(206)919-6886">
                  <Typography variant="p" className="text-primary pt-4">
                    (206) 919-6886
                  </Typography>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <Typography variant="h3" className="text-foreground">
                Office Hours
              </Typography>

              <div className="max-w-95 space-y-4">
                <button
                  onClick={() => setIsHoursOpen(!isHoursOpen)}
                  className="text-foreground flex w-full items-center"
                >
                  <div className="flex w-full gap-4">
                    {!isHoursOpen && (
                      <Typography variant="p">Open today</Typography>
                    )}

                    <Typography variant="p" className="text-primary">
                      08:00 am – 07:00 pm
                    </Typography>
                  </div>
                  {isHoursOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {isHoursOpen && (
                  <div className="mt-4 space-y-3 pt-2">
                    {officeHours.map((item) => (
                      <div
                        key={item.day}
                        className={cn(
                          "font-body flex justify-between text-lg transition-all",
                          currentDay === item.day
                            ? "text-foreground font-bold"
                            : "text-foreground/50",
                        )}
                      >
                        <span className="w-10">{item.day}</span>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-5">
                <Typography variant="p">Open daily</Typography>
                <Typography variant="p">8:00 am - 7:00 pm</Typography>
              </div>

              <Typography variant="p" className="text-foreground/70 pt-4">
                Appointments outside office hours available upon request. Just
                call!
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
