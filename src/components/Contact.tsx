import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "gui-ariston@outlook.com",
      href: "mailto:gui-ariston@outlook.com",
      color: "text-primary"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@Guiariston",
      href: "https://github.com/Guiariston",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Almirante Tamandaré - PR",
      href: "#",
      color: "text-primary"
    }
  ];

  return (
    <section id="contato" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e conversas interessantes. 
            Vamos conectar!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const isClickable = method.href !== "#";
            
            const CardWrapper = isClickable ? "a" : "div";
            const cardProps = isClickable ? {
              href: method.href,
              target: method.href.startsWith("http") ? "_blank" : undefined,
              rel: method.href.startsWith("http") ? "noopener noreferrer" : undefined
            } : {};

            return (
              <CardWrapper key={method.title} {...cardProps}>
                <Card
                  className={`gradient-card border-0 shadow-card transition-all duration-300 ${
                    isClickable ? "hover:shadow-lg hover:-translate-y-2 cursor-pointer" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <IconComponent className={`h-12 w-12 ${method.color} mx-auto mb-4`} />
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground">{method.value}</p>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Send className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Vamos Conversar?</h3>
                <p className="text-muted-foreground">
                  Interessado em colaborações, oportunidades de trabalho ou apenas uma conversa 
                  sobre tecnologia? Adoraria ouvir de você!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="shadow-button hover:shadow-lg transition-all duration-300"
                >
                  <a href="mailto:gui-ariston@outlook.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Email
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href="https://github.com/Guiariston"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Ver GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;