import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({
  title = "Desenvolvimento de Software",
  description = "Soluções completas de software personalizadas para atender suas necessidades específicas.",
  icon: Icon,
  imageUrl = "/logo.png",
  bgColor = "bg-gradient-to-br from-[#f52545] to-orange-500",
  gridSpan = "small",
  onClick,
  url,
  featured = false, // Corrigido para 'featured'
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    else if (url) window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="h-full"
    >
      <div
        className={`
          ${bgColor} h-full p-6 cursor-pointer overflow-hidden rounded-xl
          shadow-lg hover:shadow-xl transition-all duration-300 relative
        `}
        onClick={handleClick}
      >
        {featured && ( // Corrigido para 'featured'
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full 
                         bg-[#f52545] text-white text-sm font-medium">
            Destaque
          </div>
        )}

        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <div className="p-2 rounded-lg bg-[#f52545]/20">
                <Icon className="w-5 h-5 text-[#f52545]" />
              </div>
            )}
            <h3 className="text-xl font-bold text-[#fff]">{title}</h3> {/* Corrigido o fechamento da tag */}
          </div>

          {imageUrl && (
            <div
              className="relative w-full mb-4 overflow-hidden rounded-lg"
              style={{ height: gridSpan === "large" ? "390px" : "240px" }}
            >
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 
                         hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fff]/60 
                            to-transparent opacity-0 hover:opacity-100 
                            transition-opacity duration-300" />
            </div>
          )}

          <p className="text-[#fff]/90 flex-grow mb-4">{description}</p>

          {url && (
            <div className="flex items-center text-[#fff] font-medium 
                          group hover:text-[#fff] transition-colors">
              <span>Saiba mais</span>
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform 
                                    group-hover:translate-x-0.5 
                                    group-hover:-translate-y-0.5" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;