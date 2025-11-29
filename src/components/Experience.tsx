import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Machine Learning | Artificial Intelligence",
    company: "Cognizo Wipro",
    location: "Coimbatore, TN",
    period: "Current",
    type: "Internship",
    icon: Briefcase,
    achievements: [
      "Completed 15 module ML course and 7 modules in Python",
      "Built stock price prediction model using regression and time series analysis",
      "Developed cardiovascular disease risk predictor achieving 80% accuracy",
      "Tech Stack: Python, TensorFlow, Keras, NumPy, pandas, Matplotlib, scikit-learn"
    ],
  },
  {
    title: "Web Development",
    company: "CodoSoft",
    location: "Remote",
    period: "2025",
    type: "Internship",
    icon: Briefcase,
    achievements: [
      "Built Personal Portfolio Website using HTML5, CSS3, JavaScript (ES6), Flexbox, GSAP",
      "Designed responsive Landing Pages with modern UI/UX principles",
      "Created CRUD Calculator App with DOM Manipulation and Math API",
      "Implemented responsive design across all projects"
    ],
  },
  {
    title: "Responsive Web Design",
    company: "FreeCodeCamp",
    location: "Online",
    period: "06/2025",
    type: "Certification",
    icon: GraduationCap,
    achievements: [
      "Completed comprehensive web design curriculum",
      "Mastered responsive design principles and accessibility",
      "Built multiple projects demonstrating modern web development skills"
    ],
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

const Experience = () => {
  return (
    <motion.section
      className="py-20 px-4 bg-muted/30"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience & Learning</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </div>

        <motion.div
          className="space-y-8"
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
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                as={Card} // Use as prop to render Card with motion
                className="p-6 border-l-4 border-l-primary" // Removed existing hover classes
                variants={itemVariants}
                whileHover={{ scale: 1.03 }} // Card specific hover scale
                transition={hoverSpring}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          {exp.type}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
