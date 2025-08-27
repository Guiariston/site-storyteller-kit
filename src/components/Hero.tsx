import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="mb-8">
          <img
            src="https://logodetimes.com/wp-content/uploads/parana.png"
            alt="Guilherme Ariston Portes"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-card animate-float"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Olá, eu sou{" "}
          <span className="text-gradient">Guilherme Ariston Portes</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
          Estudante de Engenharia de Software
        </p>
        
        <p className="text-lg sm:text-xl text-portfolio-gray mb-8 max-w-2xl mx-auto">
          <span className="text-gradient font-semibold">"Ideias além de ideias"</span>
          <br />
          Especializado em Data Science e Inteligência Artificial
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="shadow-button hover:shadow-lg transition-all duration-300"
          >
            Ver Projetos
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="mailto:gui-ariston@outlook.com"
              className="flex items-center"
            >
              <Mail className="mr-2 h-4 w-4" />
              Entre em Contato
            </a>
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-primary hover:scale-110 transition-all duration-300"
          >
            <a
              href="https://github.com/Guiariston"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;