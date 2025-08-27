import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="font-bold text-xl text-gradient">Guilherme Ariston Portes</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Estudante de Engenharia de Software | Data Science & IA
          </p>
          
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 mx-1 text-accent fill-current" />
            <span>em {currentYear}</span>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>"Ideias além de ideias" - Almirante Tamandaré, Paraná</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;