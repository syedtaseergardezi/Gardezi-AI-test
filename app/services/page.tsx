import { Suspense } from "react";
import Image from "next/image";
import { generateMockServices } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import ServiceCard from "@/components/services/service-card";
import { BrainCircuit, Smartphone, Database, Workflow, Cpu, Lightbulb } from "lucide-react";

// This would normally come from Sanity, but using mock data for demonstration
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

export const metadata = {
  title: 'Services | Gardezi.ai',
  description: 'Explore our range of AI and software development services including machine learning, web and mobile apps, data engineering, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                AI & Software Services That Drive Innovation
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We offer a comprehensive suite of AI and software development services designed to help businesses innovate, automate, and scale. Our team of experts will work with you to identify the right solutions for your specific needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="mr-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Cutting-edge AI solutions</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Scalable infrastructure</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Expert consultation</span>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Ongoing support</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-multiply z-10" />
              <Image
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Software Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Service Offerings"
            subtitle="From AI development to data engineering, we provide comprehensive software solutions that power business growth."
            centered
          />

          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading services...</div>}>
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
          </Suspense>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="We follow a structured, collaborative approach to ensure your project's success."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Discovery</h3>
              <p className="text-muted-foreground">
                We begin with a thorough discovery phase to understand your business, goals, and requirements in detail.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Planning</h3>
              <p className="text-muted-foreground">
                We create a detailed project plan with timelines, milestones, and deliverables based on your requirements.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Development</h3>
              <p className="text-muted-foreground">
                Our team follows agile methodologies to develop, test, and refine your solution with regular feedback loops.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Deployment & Support</h3>
              <p className="text-muted-foreground">
                We deploy your solution and provide ongoing maintenance and support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}