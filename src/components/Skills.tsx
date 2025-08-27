import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Brain, 
  Globe, 
  BarChart, 
  GitBranch 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Code,
      skills: ["Python", "JavaScript", "HTML", "CSS", "SQL", "TypeScript"],
      color: "text-primary"
    },
    {
      title: "Data Science & IA",
      icon: Brain,
      skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib"],
      color: "text-accent"
    },
    {
      title: "Desenvolvimento Web",
      icon: Globe,
      skills: ["React", "Node.js", "Express", "HTML5", "CSS3", "Responsive Design"],
      color: "text-primary"
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Database Design"],
      color: "text-accent"
    },
    {
      title: "Análise de Dados",
      icon: BarChart,
      skills: ["Data Visualization", "Statistical Analysis", "Jupyter", "Plotly", "Seaborn"],
      color: "text-primary"
    },
    {
      title: "Ferramentas & Versionamento",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Docker", "Linux", "APIs REST"],
      color: "text-accent"
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-portfolio-light-gray/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino e estou constantemente aprendendo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-8 w-8 ${category.color} mr-3`} />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 gradient-card rounded-2xl shadow-card">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                Sempre <span className="text-gradient">Aprendendo</span>
              </h3>
              <p className="text-muted-foreground">
                Explorando novas tecnologias e metodologias para estar sempre atualizado 
                com as tendências do mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;