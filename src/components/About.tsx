import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Code, MapPin } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="sobre" className="py-20 bg-portfolio-light-gray/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Um pouco sobre <span className="text-gradient">Mim</span> 🚗
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Olá, eu sou Guilherme Ariston Portes, estou cursando Engenharia de Software, sou um grande admirador de Data Science 
              e Inteligência Artificial. Atualmente estou explorando diversas linguagens 
              e tecnologias para ampliar meus conhecimentos e experiências na área.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Minha paixão está em transformar dados em insights valiosos e criar 
              soluções inteligentes que possam fazer a diferença no mundo real.
            </p>

            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span>Almirante Tamandaré - Paraná</span>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Educação</h3>
                </div>
                <p className="text-muted-foreground">
                  Estudante de Engenharia de Software, sempre em busca de novos conhecimentos
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Paixão</h3>
                </div>
                <p className="text-muted-foreground">
                  Data Science e Inteligência Artificial - transformando dados em soluções
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Objetivo</h3>
                </div>
                <p className="text-muted-foreground">
                  Explorar e dominar diversas linguagens e tecnologias emergentes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;