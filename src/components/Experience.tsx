import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

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

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience & Learning</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
