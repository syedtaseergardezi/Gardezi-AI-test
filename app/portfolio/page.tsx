import { Suspense } from "react";
import { generateMockProjects } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import ProjectGrid from "@/components/portfolio/project-grid";

// This would normally come from Sanity, but using mock data for demonstration
const projects = generateMockProjects();

export const metadata = {
  title: 'Portfolio | Gardezi.ai',
  description: 'Explore our portfolio of AI and software projects, including machine learning solutions, web applications, and mobile apps.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our work across various industries and technologies. Each project reflects our commitment to building innovative solutions that solve real business problems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading projects...</div>}>
            <ProjectGrid projects={projects} />
          </Suspense>
        </div>
      </section>
    </>
  );
}