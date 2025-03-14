import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  imageUrl?: string;
  bgColor?: string;
  onClick?: () => void;
  url?: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Desenvolvimento de Software",
  description = "Soluções completas de software personalizadas para atender suas necessidades específicas.",
  icon: Icon,
  imageUrl = "/perfil/logo.svg",
  bgColor = "bg-gradient-to-br from-[#f52545] to-orange-500",
  onClick,
  url,
  featured = false,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    else if (url) window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-2xl shadow-xl overflow-hidden cursor-pointer bg-black"
      onClick={handleClick}
    >
      {/* Imagem no topo */}
      {imageUrl && (
        <div className="w-full h-80 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Conteúdo abaixo da imagem */}
      <div className="p-6 flex flex-col gap-3">
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full 
                        bg-white/90 text-[#f52545] text-sm font-bold backdrop-blur-sm
                        shadow-lg transform -rotate-2 border border-[#f52545]/20">
            Destaque
          </div>
          
        )}

        {/* Ícone e Título */}
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2.5 rounded-xl bg-red-500 backdrop-blur-sm shadow-lg">
              <Icon className="w-5 h-5 text-white" />
            </div>
          )}
          <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
          
        </div>
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/20 filter blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/20 filter blur-2xl"></div>
        {/* Descrição */}
        <p className="text-gray-100 text-base">{description}</p>

        {/* Botão Saiba Mais */}
        {url && (
          <motion.div
            className="flex items-center text-red-600 font-medium gap-2 
                      bg-gray-100 px-4 py-2 rounded-full w-fit
                      hover:bg-red-200 transition-colors border  mt-4"
            whileHover={{ x: 5 }}
          >
            <span>Visite </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
