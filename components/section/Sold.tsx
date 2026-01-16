"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Typography from "../ui/Typography";

const soldData = [
  {
    title: "Top Residential Sales Last 5 Years",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    image: "/sold/sold1.png",
  },
  {
    title: "Don't Just List it...",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    image: "/sold/sold2.png",
  },
  {
    title: "Guide to Buyers",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    image: "/sold/sold3.png",
  },
];

export default function Sold() {
  return (
    <section className="bg-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              className="text-muted tracking-[0.3em] uppercase"
            >
              Get It Sold
            </Typography>
          </motion.div>
        </div>

        <div className="space-y-24">
          {soldData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}

              <div className="w-full md:w-1/2">
                <div className="relative aspect-video w-full overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="w-full space-y-4 text-center md:w-1/2">
                <Typography variant="h3" className="text-muted">
                  {item.title}
                </Typography>

                <Typography variant="p" className="text-muted/60">
                  {item.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
