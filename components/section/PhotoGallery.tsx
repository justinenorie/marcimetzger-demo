"use client";

import * as React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Typography from "../ui/Typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const images = [
  "/carousel/picture1.jpg",
  "/carousel/picture2.jpg",
  "/carousel/picture3.jpg",
  "/carousel/picture4.jpg",
  "/carousel/picture5.jpg",
  "/carousel/picture6.jpg",
  "/carousel/picture7.jpg",
];

export default function PhotoGallery() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-muted overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
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
              Photo Gallery
            </Typography>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-4"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[85%] pl-4 md:basis-[70%] lg:basis-[60%]"
                >
                  <div
                    className={cn(
                      "relative aspect-video w-full overflow-hidden rounded-md transition-all duration-700 ease-in-out",
                      {
                        "scale-100 opacity-100": current === index,
                        "scale-90 opacity-30 blur-[2px]": current !== index,
                      },
                    )}
                  >
                    <Image
                      src={src}
                      alt={`Property shot ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="text-foreground bg-foreground/50 left-8 hidden border-none md:flex" />
            <CarouselNext className="text-foreground bg-foreground/50 right-8 hidden border-none md:flex" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center gap-3 px-4"
        >
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "relative h-14 w-20 shrink-0 overflow-hidden rounded-sm transition-all duration-300 md:h-20 md:w-32",
                current === index
                  ? "ring-muted scale-105 opacity-100 ring-2 ring-offset-2 ring-offset-[#1a1a1a]"
                  : "opacity-40 hover:opacity-70",
              )}
            >
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
