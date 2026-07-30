import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, FileText, Calendar } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "harshdeep18894@gmail.com",
      href: "mailto:harshdeep18894@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/harsh-d-singh/",
    },
    {
      icon: Calendar,
      label: "Schedule",
      value: "Book a call with me",
      href: "https://calendly.com/harsh1808/product-discussion",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: "/harsh-deep-singh-resume.pdf",
    },
  ];

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden section-padding bg-navy text-navy-foreground">
      <svg
        viewBox="0 0 400 200"
        className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 opacity-[0.12]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 150 C 80 130, 140 60, 220 60 C 280 60, 300 110, 360 40"
          stroke="hsl(var(--teal-vivid))"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path d="M346 52 L360 40 L352 58" stroke="hsl(var(--teal-vivid))" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-navy-foreground/70 max-w-xl mx-auto">
            I'm always open to discussing product challenges, new opportunities,
            or just connecting with fellow product people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                download={link.label === "Resume" ? true : undefined}
                className="flex items-center gap-4 p-4 bg-navy-foreground/10 rounded-lg hover:bg-navy-foreground/20 transition-colors group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <link.icon className="w-5 h-5 text-teal-vivid shrink-0" />

                <div className="min-w-0 flex-1">
                  <div className="text-sm text-navy-foreground/60">{link.label}</div>
                  <div className="font-medium break-words">
                    {link.value}
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
