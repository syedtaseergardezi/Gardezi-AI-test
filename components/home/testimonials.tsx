"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => 
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  
  const next = () => 
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="We've helped companies of all sizes achieve their goals through innovative AI and software solutions."
          centered
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="p-1"
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-card/50 to-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="relative aspect-square md:col-span-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10" />
                        <Image
                          src={testimonials[current].imageUrl}
                          alt={testimonials[current].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8 md:col-span-3 flex flex-col justify-center">
                        <Quote className="h-10 w-10 text-primary/20 mb-4" />
                        <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
                          "{testimonials[current].quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-lg">
                            {testimonials[current].author}
                          </p>
                          <p className="text-muted-foreground">
                            {testimonials[current].role}, {testimonials[current].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}