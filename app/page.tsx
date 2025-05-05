import { Suspense } from "react";
import HeroSection from "@/components/home/hero-section";
import FeaturedProjects from "@/components/home/featured-projects";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/home/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { generateMockProjects, generateMockTestimonials, generateMockServices } from "@/lib/utils";
import ServiceCard from "@/components/services/service-card";
import { BrainCircuit, Smartphone, Database, Workflow, Cpu, Lightbulb } from "lucide-react";

// This would normally come from Sanity, but using mock data for demonstration
const projects = generateMockProjects();
const testimonials = generateMockTestimonials();
const services = generateMockServices();

// Map service names to icons
const serviceIcons: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Workflow: <Workflow className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a wide range of AI and software development services to help businesses innovate and scale."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={serviceIcons[service.icon]}
                features={service.features}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading projects...</div>}>
        <FeaturedProjects projects={projects} />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading testimonials...</div>}>
        <Testimonials testimonials={testimonials} />
      </Suspense>

      <CTASection />
    </>
  );
}