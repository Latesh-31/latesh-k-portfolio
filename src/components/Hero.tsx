import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const hoverSpring = {
  type: "spring",
  stiffness: 300,
  damping: 10,
};

const Hero = () => {
  const headingText = "Hi, I'm Latesh K";
  const words = headingText.split(" ");

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-muted/20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full mx-auto text-center space-y-8"> {/* Removed animate-fade-in */}
        <div className="space-y-4">
          <motion.h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} custom={i} className="inline-block mr-2">
                {word === "Latesh" || word === "K" ? (
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            AI/ML Engineer & Web Developer
          </motion.p>
          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
            Building intelligent solutions with Machine Learning and crafting beautiful web experiences. 
            Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at SIEE, Coimbatore.
          </motion.p>
        </div>

        <motion.div className="flex flex-wrap gap-4 justify-center items-center" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} transition={hoverSpring}>
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={hoverSpring}>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className="flex gap-4 justify-center pt-4" variants={itemVariants}>
          <motion.a 
            href="https://github.com/Latesh-3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border" // Removed existing hover classes
            whileHover={{ scale: 1.15 }}
            transition={hoverSpring}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/lateshkrishnamany-21136725a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border" // Removed existing hover classes
            whileHover={{ scale: 1.15 }}
            transition={hoverSpring}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="mailto:latesh12306@gmail.com"
            className="p-3 rounded-full border" // Removed existing hover classes
            whileHover={{ scale: 1.15 }}
            transition={hoverSpring}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
