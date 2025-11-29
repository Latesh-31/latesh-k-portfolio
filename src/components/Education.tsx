import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

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

const Education = () => {
  return (
    <motion.section
      className="py-20 px-4 bg-muted/30"
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg">
            Academic background and professional certifications
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
          <motion.div
            as={Card} // Use as prop to render Card with motion
            className="p-6" // Removed existing hover classes
            variants={itemVariants}
            whileHover={{ scale: 1.03 }} // Card specific hover scale
            transition={hoverSpring}
          >
            <div className="flex gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg h-fit">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">B.Tech in AI & Machine Learning</h3>
                <p className="text-muted-foreground mb-1">SIEE, Coimbatore, TN</p>
                <p className="text-sm text-muted-foreground mb-4">Expected: 08/2025</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">HSC:</span>
                    <span className="text-sm text-muted-foreground">80.5%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    S.R.S.I. Matric Higher Secondary School, Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            as={Card} // Use as prop to render Card with motion
            className="p-6" // Removed existing hover classes
            variants={itemVariants}
            whileHover={{ scale: 1.03 }} // Card specific hover scale
            transition={hoverSpring}
          >
            <div className="flex gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg h-fit">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Responsive Web Design</p>
                    <p className="text-sm text-muted-foreground">FreeCodeCamp</p>
                  </div>
                  <div>
                    <p className="font-medium">Machine Learning & AI</p>
                    <p className="text-sm text-muted-foreground">Cognizo Wipro Internship</p>
                  </div>
                  <div>
                    <p className="font-medium">Web Development</p>
                    <p className="text-sm text-muted-foreground">CodoSoft Internship</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
