import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Wrench } from "lucide-react";

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

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
