import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Brain, Code } from "lucide-react";

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

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my technical work and innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
