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
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: "#",
    },
    {
      icon: Calendar,
      label: "Schedule",
      value: "Book a call",
      href: "#",
    },
  ];

  return (
    <section ref={ref} id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            I'm always open to discussing product challenges, new opportunities,
            or just connecting with fellow product people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors group"
            >
              <link.icon className="w-5 h-5 text-accent" />
              <div>
                <div className="text-sm text-primary-foreground/60">
                  {link.label}
                </div>
                <div className="font-medium group-hover:text-accent transition-colors">
                  {link.value}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
