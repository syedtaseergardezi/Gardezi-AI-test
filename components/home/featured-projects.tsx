"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore our recent work and see how we've helped businesses transform with AI and software solutions."
          centered
        />

        <div className="relative">
          <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 -mt-4 z-10">
            <Button
              onClick={movePrev}
              className="mx-4 rounded-full p-2 h-10 w-10"
              disabled={isDisabled('prev')}
              variant="secondary"
              size="icon"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              onClick={moveNext}
              className="mx-4 rounded-full p-2 h-10 w-10"
              disabled={isDisabled('next')}
              variant="secondary"
              size="icon"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div
            ref={carousel}
            className="carousel-container relative flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="carousel-item snap-start relative w-full sm:w-1/2 lg:w-1/3 shrink-0 rounded-xl overflow-hidden bg-card border shadow-md group"
              >
                <Link href={`/portfolio/${project.slug}`} className="block h-full">
                  <div className="aspect-[16/9] w-full overflow-hidden relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-xs uppercase tracking-wider text-white/80 mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
                      View Project <span className="ml-1">→</span>
                    </Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}