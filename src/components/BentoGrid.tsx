import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import LinkCard from "./LinkCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Globe,
  Mail,
  Music,
  Store as StoreIcon,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Phone as Whatsapp, // Importando ícone de telefone para WhatsApp
  ExternalLink,
} from "lucide-react";

interface BentoGridItem {
  id: string;
  type: "service" | "link" | "iframe"; 
  title: string;
  description?: string;
  icon?: React.ElementType;
  imageUrl?: string;
  url?: string;
  bgColor?: string;
  gridSpan?: "small" | "medium" | "large";
  featured?: boolean;
  category?: string;
}

interface BentoGridProps {
  items?: BentoGridItem[];
  className?: string;
}

const defaultItems: BentoGridItem[] = [
  // Serviços
  {
    id: "2",
    type: "service",
    title: "Meu Portfólio",
    description:
      "Aqui, apresento meu portfólio, que destaca a qualidade do meu trabalho em identidade visual e fortalece a presença da sua marca nas redes sociais, promovendo engajamento e crescimento.",
    icon: Globe,
    imageUrl: "/perfil/site.png",
    url: "https://www.thomasnascimento.online",
    bgColor: "bg-black",
    gridSpan: "medium",
    category: "Serviços",
},
{
    id: "4",
    type: "service",
    title: "AfiliShop",
    description: "Projeto em andamento para criação de uma plataforma de afiliados.",
    icon: StoreIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=400&auto=format&fit=crop&sat=-100",
    url: "#afili-shop",
    bgColor: "bg-black",
    gridSpan: "medium",
    category: "Serviços",
},

// Links Sociais
{
    id: "3",
    type: "link",
    title: "GitHub",
    description: "Explore meus projetos e contribuições em código aberto.",
    icon: Github,
    url: "https://github.com/odevthomas",
    bgColor: "bg-black",
    category: "Social",
},
{
    id: "7",
    type: "link",
    title: "Instagram",
    description: "Acompanhe minha jornada criativa e minhas atualizações diárias.",
    icon: Instagram,
    url: "https://instagram.com/odevthomas",
    bgColor: "bg-black",
    category: "Social",
},
{
    id: "8",
    type: "link",
    title: "LinkedIn",
    description: "Conecte-se comigo para ver minha trajetória e experiências profissionais.",
    icon: Linkedin,
    url: "https://linkedin.com/in/odevthomas",
    bgColor: "bg-black",
    category: "Social",
},
{
    id: "9",
    type: "link",
    title: "Twitter",
    description: "Junte-se à conversa e fique por dentro dos meus últimos pensamentos.",
    icon: Twitter,
    url: "https://twitter.com/odevthomas",
    bgColor: "bg-black",
    category: "Social",
},
  // Links de Contato
  {
    id: "10", 
    type: "link",
    title: "WhatsApp",
    description: "Entre em contato comigo pelo WhatsApp para consultas rápidas.",
    icon: Whatsapp, 
    url: "https://api.whatsapp.com/send?phone=551999042072&text=Oi%20Thomas!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.%20Vamos%20conversar%3F", 
    bgColor: "bg-black",
    category: "Contato",
  },
  {
    id: "13", 
    type: "link",
    title: "Contratação Freelancer",
    description: "Entre em contato para serviços de desenvolvimento web personalizados.",
    icon: Globe,
    url: "mailto:developer.thomas@outlook.com",
    bgColor: "bg-black",
    category: "Contato",
  },
  {
    id: "5",
    type: "link",
    title: "Contato",
    description: "Entre em contato para colaborações e consultas.",
    icon: Mail,
    url: "developer.thomas@outlook.com",
    bgColor: "bg-black",
    category: "Contato",
  },

  // Links de Mídia Social e Outros
  {
    id: "6",
    type: "iframe",
    title: "Spotify",
    description: "Ouça minhas playlists e músicas favoritas.",
    icon: Music,
    url: "https://open.spotify.com/embed/track/5pKCDm2fw4k6D6C5Rk646C?utm_source=generator&theme=0",
    bgColor: "bg-black",
    category: "Social",
  },
];

const BentoGrid = ({
  items = defaultItems,
  className = "",
}: BentoGridProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  border-white/10 z-10 bg-black ${className}`}
      
    >
      
      <AnimatePresence mode="wait">
        
        {isLoaded && (
          <motion.div
            key="bento-grid"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
                
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover="hover"
                className={`${item.gridSpan === "large" ? "sm:col-span-2 sm:row-span-2" : item.gridSpan === "medium" ? "sm:col-span-2" : ""}`}
                layout
              >
                
                {item.type === "service" ? (
                  <ServiceCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    imageUrl={item.imageUrl}
                    bgColor={item.bgColor}
                    gridSpan={item.gridSpan}
                    url={item.url}
                    featured={item.featured}
                  />
                ) : item.type === "iframe" ? (
                  <div className="bg-black p-4 rounded-lg">
                    <h3 className="text-white">{item.title}</h3>
                    <p className="text-gray-100">{item.description}</p>
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src={item.url}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                ) : (
                  <LinkCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon && React.createElement(item.icon, { className: "h-5 w-5" })}
                    url={item.url || "#"}
                    color={item.bgColor}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default BentoGrid;
