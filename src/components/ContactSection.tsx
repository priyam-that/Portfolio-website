import { useState } from "react";
import { Send, Mail, TwitterIcon, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xeokowrb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      platform: "Email",
      href: "mailto:priyammannaworks@gmail.com",
      icon: Mail,
      color: "hover:text-neon-cyan",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Email me",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/priyammanna/",
      icon: Linkedin,
      color: "hover:text-neon-purple",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Connect on LinkedIn",
    },
    {
      platform: "Twitter",
      href: "https://x.com/MannaCodes",
      icon: TwitterIcon,
      color: "hover:text-neon-green",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Follow on Twitter",
    },
    {
      platform: "GitHub",
      href: "https://github.com/priyam-that",
      icon: Github,
      color: "hover:text-neon-blue",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "View GitHub Profile",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Let's Create Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind? I'd love to hear about it. Whether
                you're looking for a creative developer, a design consultant, or
                just want to chat about the latest tech trends, feel free to
                reach out.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    className={`p-3 glass-card rounded-lg transition-all duration-300 ${link.color} hover:scale-110 group`}
                    title={link.title}
                    target={link.target}
                    rel={link.rel}
                    aria-label={`Link to ${link.platform}`}
                  >
                    <link.icon
                      size={24}
                      className="group-hover:animate-pulse"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field */}
              <input
                type="text"
                name="_honey"
                hidden
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 group transition-all duration-300 ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                }`}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                    Send Message
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

export default ContactSection;
