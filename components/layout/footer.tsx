import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/gardezi-ai", icon: Github },
    { name: "Twitter", href: "https://twitter.com/gardezi_ai", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/gardezi-ai", icon: Linkedin },
    { name: "Email", href: "mailto:contact@gardezi.ai", icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-24 lg:px-8">
        <div className="flex justify-center mb-10">
          <Link href="/" className="font-bold text-2xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              gardezi.ai
            </span>
          </Link>
        </div>
        <nav className="mb-10 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-foreground hover:text-primary">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="mt-10 flex flex-col items-center">
          <Button variant="link" size="sm" asChild>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Button>
          <p className="mt-2 text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Gardezi.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}