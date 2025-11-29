import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "latesh12306@gmail.com",
    href: "mailto:latesh12306@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7094562057",
    href: "tel:+917094562057",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, TN 641104",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Latesh-3",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/lateshkrishnamany-21136725a",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      duration: 0.6,
    },
  },
};

const hoverSpring = {
  type: "spring",
  stiffness: 300,
  damping: 10,
};

const Contact = () => {
  return (
    <motion.section
      className="py-20 px-4"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>

        <motion.div
          as={Card} // Use as prop to render Card with motion
          className="p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <motion.a
                        href={info.href}
                        className="font-medium hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={hoverSpring}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground mb-4 text-center">Connect with me</p>
            <motion.div
              className="flex gap-4 justify-center"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border rounded-lg" // Removed existing hover classes
                    aria-label={link.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15 }} // Slightly more bounce for small icons
                    transition={hoverSpring}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
