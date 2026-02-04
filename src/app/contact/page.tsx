import { MainLayout } from '@/components/layout';
import { ContactForm } from '@/components/contact';
import { Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact | Finnian\'s Blog',
  description: 'Get in touch with Finnian for collaborations, questions, or just to say hello.',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <header className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a question or want to collaborate? I&apos;d love to hear from you.
              </p>
            </header>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-secondary p-3">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">hello@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-secondary p-3">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">San Francisco Bay Area</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold">Response Time</h2>
                  <p className="text-muted-foreground">
                    I typically respond to messages within 24-48 hours. 
                    For urgent matters, please indicate so in your message.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                  <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
