import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  imageUrl?: string;
  bgColor?: string;
  gridSpan?: "small" | "medium" | "large";
  onClick?: () => void;
  url?: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Desenvolvimento de Software",
  description = "Soluções completas de software personalizadas para atender suas necessidades específicas.",
  icon: Icon,
  imageUrl = "/logo.png",
  bgColor = "bg-gradient-to-br from-[#f52545] to-orange-500",
  gridSpan = "small",
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
      className="h-full relative group"
    >
      <div
        className={`
          ${bgColor} h-full rounded-2xl shadow-xl overflow-hidden
          transition-all duration-300 relative
        `}
      >
        {/* Overlay gradient that gets stronger on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-10"/>
        
        {/* Main content container */}
        <div 
          className="h-full flex flex-col relative z-20 p-6 cursor-pointer"
          onClick={handleClick}
        >
          {featured && (
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full 
                          bg-white/90 text-[#f52545] text-sm font-bold backdrop-blur-sm
                          shadow-lg transform -rotate-2 border border-[#f52545]/20">
              Destaque
            </div>
          )}

          {/* Image container */}
          {imageUrl && (
            <div
              className="absolute inset-0 w-full h-full z-0"
            >
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-700 
                        scale-110 group-hover:scale-125"
              />
            </div>
          )}

          <div className="flex flex-col h-full justify-between">
            {/* Header with icon and title */}
            <div className="flex items-center gap-3 mb-4">
              {Icon && (
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              )}
              <h3 className="text-2xl font-bold text-white tracking-tight shadow-text">
                {title}
              </h3>
            </div>

            {/* Description area that adjusts size based on gridSpan */}
            <div className="mt-auto">
              <p className="text-white/90 text-base mb-5 max-w-[90%] line-clamp-3 shadow-text">
                {description}
              </p>

              {url && (
                <motion.div 
                  className="flex items-center text-white font-medium gap-2 
                            bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit
                            group-hover:bg-white/20 transition-colors border border-white/10"
                  whileHover={{ x: 5 }}
                >
                  <span>Saiba mais</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform 
                                      group-hover:translate-x-0.5 
                                      group-hover:-translate-y-0.5" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Style definition for shadow text */}
      <style jsx>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </motion.div>
  );
};

export default ServiceCard;