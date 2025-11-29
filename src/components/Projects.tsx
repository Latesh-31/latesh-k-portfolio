import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Brain, Code } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Colour Sorting for Mangoes",
    period: "11/2024 – 02/2025",
    icon: Eye,
    description: "Real-time machine vision system for fruit quality assessment",
    details: [
      "Developed fruit detection algorithm using Python and OpenCV",
      "Implemented classification based on ripeness levels",
      "Applied computer vision techniques for color analysis",
      "Created automated sorting mechanism"
    ],
    technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
  },
  {
    title: "Cardiovascular Disease Risk Predictor",
    period: "06/2025",
    icon: Brain,
    description: "AI-powered health risk assessment tool",
    details: [
      "Built predictive model achieving 80% accuracy",
      "Implemented data preprocessing and feature engineering",
      "Used ensemble learning techniques for improved predictions",
      "Created user-friendly interface for risk assessment"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Stock Price Prediction Model",
    period: "04/2025",
    icon: Brain,
    description: "Time series forecasting for financial markets",
    details: [
      "Implemented regression and time series analysis",
      "Used LSTM networks for sequence prediction",
      "Performed feature extraction from historical data",
      "Visualized predictions with interactive charts"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Matplotlib"],
  },
  {
    title: "Web Development Portfolio",
    period: "2025",
    icon: Code,
    description: "Collection of responsive web applications",
    details: [
      "Personal Portfolio with modern animations using GSAP",
      "Responsive Landing Pages with Flexbox and CSS Grid",
      "CRUD Calculator with DOM manipulation",
      "Mobile-first design approach"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
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

const Projects = () => {
  return (
    <motion.section
      className="py-20 px-4"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my technical work and innovations
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                as={Card} // Use as prop to render Card with motion
                className="p-6 group" // Removed existing hover classes
                variants={itemVariants}
                whileHover={{ scale: 1.03 }} // Card specific hover scale
                transition={hoverSpring}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <motion.div // Applied motion to icon container
                      className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg"
                      whileHover={{ scale: 1.1 }} // Bouncy scale for the icon itself
                      transition={hoverSpring}
                    >
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>

                  <ul className="space-y-1.5">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
