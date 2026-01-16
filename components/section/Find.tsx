"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Typography from "../ui/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

export default function Find() {
  return (
    <section className="bg-foreground flex min-h-175 w-full flex-col overflow-hidden md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-100 w-full md:h-auto md:w-1/2"
      >
        <Image
          src="/dreamhome.jpg" // todo: change this
          alt="Luxury Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 p-8 text-center">
          <Typography
            variant="h2"
            className="tracking-[0.3em] text-white uppercase drop-shadow-lg"
          >
            Find Your Dream Home
          </Typography>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col justify-center bg-slate-50 p-8 md:w-1/2 md:p-16"
      >
        <div className="mx-auto w-full max-w-lg">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend
                  variant="legend"
                  className="mb-8 text-xl tracking-widest uppercase"
                >
                  Search Listings
                </FieldLegend>

                <FieldGroup className="gap-8">
                  {/* Location Field */}
                  <Field>
                    <FieldLabel htmlFor="location">Location</FieldLabel>
                    <Select defaultValue="any">
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select Area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Location</SelectItem>
                        <SelectItem value="seattle">Seattle</SelectItem>
                        <SelectItem value="bellevue">Bellevue</SelectItem>
                        <SelectItem value="kirkland">Kirkland</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  {/* Property Details Grid */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="type">Property Type</FieldLabel>
                      <Select defaultValue="residential">
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Any Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">
                            Residential
                          </SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="sort">Sort By</FieldLabel>
                      <Select defaultValue="newest">
                        <SelectTrigger id="sort">
                          <SelectValue placeholder="Newest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">
                            Newest Listings
                          </SelectItem>
                          <SelectItem value="price-asc">
                            Price: Low to High
                          </SelectItem>
                          <SelectItem value="price-desc">
                            Price: High to Low
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  {/* Price Range Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <Field>
                      <FieldLabel htmlFor="min-price">Min Price</FieldLabel>
                      <Input id="min-price" type="number" placeholder="$0" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="max-price">Max Price</FieldLabel>
                      <Input
                        id="max-price"
                        type="number"
                        placeholder="No Max"
                      />
                    </Field>
                  </div>

                  {/* Submission Buttons */}
                  <Field orientation="horizontal" className="pt-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-black py-6 tracking-widest text-white uppercase hover:bg-gray-800"
                    >
                      Search Now
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      className="py-6 tracking-widest uppercase"
                    >
                      Reset
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
