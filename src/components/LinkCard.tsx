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
  url = "https://www.devthm.site",
  icon = <ExternalLink className="h-5 w-5" />,
  description = "Clique para visitar este link importante",
  color = "bg-gray-900",
}: LinkCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="h-full"
          >
            <Card
              className={`${color} w-full h-full min-h-[150px] p-5 flex flex-col justify-between cursor-pointer rounded-xl border border-gray-800 hover:border-white hover:border-opacity-30`}
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              role="button"
              aria-label={`Open ${title}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-white">{title}</h3>
                <div className="text-[#f52545] bg-gray-800/50 p-2 rounded-full">
                  {icon}
                </div>
              </div>

              <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                {description}
              </p>

              <div className="flex items-center mt-4 text-xs text-gray-400 bg-gray-800/30 px-2 py-1 rounded-md w-fit">
                <ExternalLink className="h-3 w-3 mr-1" />
                <span className="truncate max-w-[180px]">
                  {url.replace(/(https?:\/\/)?(www\.)?/, "")}
                </span>
              </div>
            </Card>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-gray-900 text-white">
          <p>Abrir {title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LinkCard;