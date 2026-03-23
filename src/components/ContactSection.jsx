import {
  CheckCircle,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  XCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // "success" | "error" | null
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const form = formRef.current;
    const templateParams = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      message: form.message.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setFormStatus("success");
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setFormStatus("error");
        toast({
          title: "Something went wrong.",
          description: "Your message couldn't be sent. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-8 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-8 justify-center">
              <div className="flex items-start space-x-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:jkim.kimata@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jkim.kimata@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-11">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+254768474497"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +254 768 474 497
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-15">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Nairobi, Kenya
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-xl"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center text-primary">
                <a href="https://www.linkedin.com/in/jonah-kimata/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/_kim.a.n.i" target="_blank">
                  <Instagram />
                </a>
                <a href="https://github.com/jonahkimk" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-md shadow-xs pt-3">
            <h3 className="text-xl font-semibold mb-6"> Send a Message</h3>

            {/* Status Banner */}
            {formStatus === "success" && (
              <div className="flex items-center gap-3 px-4 py-3 mb-4 rounded-md bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm duration-500">
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span>
                  Your message was sent successfully! I'll get back to you soon.
                </span>
              </div>
            )}
            {formStatus === "error" && (
              <div className="flex items-center gap-3 px-4 py-3 mb-4 rounded-md bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm">
                <XCircle className="h-5 w-5 shrink-0" />
                <span>
                  Oops! Something went wrong. Please try again or email me directly.
                </span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};