"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Typography from "../ui/Typography";

const servicesData = [
  {
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: "/services/service1.jpg",
  },
  {
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    image: "/services/service2.jpg",
  },
  {
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    image: "/services/service3.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
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
              Our Services
            </Typography>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-8 aspect-square w-full overflow-hidden">
                <div className="border-border relative h-full w-full overflow-hidden rounded-2xl border transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Typography variant="h3" className="text-foreground/90">
                  {service.title}
                </Typography>
                <Typography
                  variant="p"
                  className="text-foreground/60 leading-relaxed"
                >
                  {service.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
