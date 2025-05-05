import { Suspense } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import ContactForm from "@/components/contact/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: 'Contact | Gardezi.ai',
  description: 'Get in touch with Gardezi.ai for AI and software development services. Request a consultation or discuss your project requirements.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form or get in touch with us directly using the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold">Email</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href="mailto:contact@gardezi.ai" className="hover:text-primary">
                        contact@gardezi.ai
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold">Phone</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href="tel:+12025550157" className="hover:text-primary">
                        +1 (202) 555-0157
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold">Office</h3>
                    <p className="mt-1 text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="bg-card border rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}