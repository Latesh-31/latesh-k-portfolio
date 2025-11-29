import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "HTML & CSS", "SQL"],
  },
  {
    title: "AI/ML Frameworks",
    icon: Brain,
    skills: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Data & Visualization",
    icon: Database,
    skills: ["MongoDB", "Matplotlib", "Time Series Analysis"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["GitHub", "OpenCV", "GSAP", "Responsive Design", "DOM Manipulation"],
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

const Skills = () => {
  return (
    <motion.section
      className="py-20 px-4"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
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
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                as={Card} // Use as prop to render Card with motion
                className="p-6 border-2 hover:border-primary/50" // Removed existing hover classes for scale
                variants={itemVariants}
                whileHover={{ scale: 1.03 }} // Card specific hover scale
                transition={hoverSpring}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Skills;
