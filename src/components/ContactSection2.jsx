import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw { text: "EmailJS configuration is missing. Please check your environment variables." };
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent! Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-13 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ── Left: original layout ── */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">
              {" "}Contact Information
            </h3>

            <div className="space-y-8 justify-center">
              <div className="flex items-start space-x-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
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
                  <Phone className="h-6 w-6 text-primary" />
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
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <span className="text-muted-foreground">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-xl"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center text-primary">
                <a href="https://www.linkedin.com/in/jonah-kimata/" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/_kim.a.n.i" target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
                <a href="https://github.com/jonahkimk" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: original card layout + EmailJS form ── */}
          <div className="bg-card p-8 rounded-md shadow-xs pt-3">
            <h3 className="text-xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-2" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {" "}Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {" "}Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {" "}Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Success / error banner */}
              {submitStatus.type && (
                <div
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-md text-sm",
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
                  )}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};