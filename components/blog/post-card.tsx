import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface PostCardProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    date: string;
    author: {
      name: string;
      picture: string;
    };
    categories: string[];
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-black/50 text-white border-0">
              {post.categories[0]}
            </Badge>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          {post.author && (
            <div className="flex items-center gap-1">
              <div className="relative h-6 w-6 rounded-full overflow-hidden">
                <Image
                  src={post.author.picture}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{post.author.name}</span>
            </div>
          )}
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h2 className="text-xl font-semibold tracking-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}