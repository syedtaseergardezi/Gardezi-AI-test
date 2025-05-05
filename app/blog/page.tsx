import { Suspense } from "react";
import { generateMockBlogPosts } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import PostCard from "@/components/blog/post-card";

// This would normally come from Sanity, but using mock data for demonstration
const posts = generateMockBlogPosts();

export const metadata = {
  title: 'Blog | Gardezi.ai',
  description: 'Insights and articles on AI, machine learning, software development, and technology trends from the Gardezi.ai team.',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest articles and insights on AI, machine learning, software development, and technology trends.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading posts...</div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
}