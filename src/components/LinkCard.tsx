import React from "react";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "framer-motion";

interface LinkCardProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  description?: string;
  color?: string;
}

const LinkCard = ({
  title = "Visite Meu Site",
  url = "https://www.thomasnascimento.online",
  icon = <ExternalLink className="h-5 w-5" />,
  description = "Clique para visitar este link importante",
  color = "bg-gray-900",
}: LinkCardProps) => {
  // Extract domain for display
  const displayUrl = url.replace(/(https?:\/\/)?(www\.)?/, "").split("/")[0];
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            whileTap={{ scale: 0.98 }}
            className="h-full"
          >
            <Card
              className={`${color} w-full h-full min-h-[160px] p-6 flex flex-col justify-between cursor-pointer rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden shadow-lg`}
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              role="button"
              aria-label={`Open ${title}`}
            >

              <div className="flex items-center justify-between relative z-10 mb-3">
                <h3 className="font-bold text-xl text-white">{title}</h3>
                <div className="text-white bg-red-700 p-2.5 rounded-full backdrop-blur-sm">
                  {icon}
                </div>
              </div>

              <p className="text-sm text-gray-200 mt-1 line-clamp-2 relative z-10">
                {description}
              </p>

              <div className="flex items-center mt-5 text-xs font-medium text-white/70 bg-white/10 px-3 py-1.5 rounded-full w-fit backdrop-blur-sm relative z-10 border border-white/5">
                <ExternalLink className="h-3 w-3 mr-2" />
                <span className="truncate max-w-[180px]">
                  {displayUrl}
                </span>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 p-1 rounded-full">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>
            </Card>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-black border text-white px-3 py-1.5 rounded-lg shadow-xl">
          <p>Abrir {title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LinkCard;