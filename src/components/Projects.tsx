import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Decodificando Ideias",
      description: "Um projeto inovador focado em análise de dados e desenvolvimento web, combinando Python para processamento de dados com HTML para criação de interfaces interativas. Explora conceitos de Data Science aplicados a problemas reais.",
      technologies: ["Python", "HTML", "Data Science", "Web Development"],
      github: "https://github.com/Guiariston",
      demo: "#",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Machine Learning Explorer",
      description: "Plataforma educativa para explorar algoritmos de machine learning, visualizar dados e treinar modelos de forma interativa. Ideal para aprendizado e experimentação com IA.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "https://github.com/Guiariston",
      demo: "#",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Data Insights Dashboard",
      description: "Dashboard interativo para visualização de dados complexos, permitindo análises profundas e geração de relatórios automatizados. Ferramenta poderosa para tomada de decisões baseada em dados.",
      technologies: ["Python", "Streamlit", "PostgreSQL", "Plotly"],
      github: "https://github.com/Guiariston",
      demo: "#",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, explorando desde Data Science 
            até desenvolvimento web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-hero rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-white text-6xl font-bold opacity-80 z-10">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex-1 hover:bg-primary hover:text-primary-foreground border-primary/20"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 shadow-button"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;