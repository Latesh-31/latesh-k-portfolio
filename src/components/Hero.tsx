import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl w-full mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Latesh K
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            AI/ML Engineer & Web Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building intelligent solutions with Machine Learning and crafting beautiful web experiences. 
            Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at SIEE, Coimbatore.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
            <Mail className="w-5 h-5" />
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <a 
            href="https://github.com/Latesh-3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border hover:bg-accent hover:scale-110 transition-all"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/lateshkrishnamany-21136725a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border hover:bg-accent hover:scale-110 transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:latesh12306@gmail.com"
            className="p-3 rounded-full border hover:bg-accent hover:scale-110 transition-all"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
