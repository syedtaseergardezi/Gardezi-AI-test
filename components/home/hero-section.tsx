"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const words = ["Scale", "Innovate", "Transform", "Evolve"];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="mt-8 lg:mt-0">
            <Link
              href="/portfolio"
              className="inline-flex space-x-2 text-sm font-semibold leading-6 text-primary"
            >
              <span>View our latest projects</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            AI & Software Solutions That {" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-30 rounded-lg"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {words[currentWord]}
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Gardezi.ai specializes in building cutting-edge AI applications and software solutions
            that help businesses automate processes, gain insights from data, and deliver 
            exceptional user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Button asChild size="lg">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-lg"
          >
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur-xl" />
            <div className="relative aspect-video w-full rounded-lg bg-card shadow-xl border overflow-hidden flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8 w-full h-full opacity-80">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md bg-primary/10 flex items-center justify-center"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}