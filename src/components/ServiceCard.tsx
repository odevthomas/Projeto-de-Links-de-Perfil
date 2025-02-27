import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
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

const ServiceCard = ({
  title = "Service Title",
  description = "This is a brief description of the service offered. Click to learn more about what we can do for you.",
  icon: Icon,
  imageUrl = "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=300&auto=format&fit=crop",
  bgColor = "bg-gray-900",
  gridSpan = "small",
  onClick,
  url,
  featured = false,
}: ServiceCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="h-full"
    >
      <Card
        className={`${bgColor} h-full p-6 cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 border border-gray-800 hover:border-white hover:border-opacity-30 relative`}
        onClick={handleClick}
      >
        {featured && (
          <Badge className="absolute top-3 right-3 z-10 bg-white hover:bg-white text-black">
            Featured
          </Badge>
        )}

        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            {Icon && (
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <Icon className="w-5 h-5 text-white" />
              </div>
            )}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>

          {imageUrl && (
            <div
              className="relative w-full mb-4 overflow-hidden rounded-lg"
              style={{ height: gridSpan === "large" ? "220px" : "140px" }}
            >
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}

          <p className="text-gray-300 flex-grow">{description}</p>

          {url && (
            <div className="mt-4 flex items-center text-white font-medium hover:underline group">
              Learn more
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
