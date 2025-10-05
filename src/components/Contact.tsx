import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

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

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>

        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground mb-4 text-center">Connect with me</p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border rounded-lg hover:bg-accent hover:scale-110 transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
