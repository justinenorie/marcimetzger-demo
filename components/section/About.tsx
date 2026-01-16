"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Typography from "../ui/Typography";

const badges = [
  { src: "/badge/badge1.jpg", alt: "The Ridge Realty Group" },
  { src: "/badge/badge2.jpg", alt: "Equal Housing Opportunity" },
  { src: "/badge/badge3.jpg", alt: "Realtor Logo" },
  { src: "/badge/badge4.jpg", alt: "Pahrump Valley Chamber of Commerce" },
];

export default function About() {
  return (
    <section className="bg-muted flex min-h-screen flex-col items-center justify-center px-4 py-24">
      <div className="w-full max-w-4xl space-y-16 text-center">
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
            Marci Metzger
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 shadow-2xl md:h-80 md:w-80">
            <Image
              src="/about.png"
              alt="Marci Metzger"
              fill
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <Typography
            variant="h3"
            className="text-foreground font-medium tracking-[0.15em] uppercase"
          >
            Realtor for nearly 3 decades!
          </Typography>

          <Typography
            variant="p"
            className="text-foreground/80 text-lg tracking-widest"
          >
            206-919-6886
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full border-t border-white/5 pt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-30">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="relative h-12 w-24 opacity-60 transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-30 md:w-32"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
