import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

interface ProfileSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  backgroundColor?: string;
}

const ProfileSection = ({
  name = "Thomas Eduardo",
  title = "Desenvolvedor Web Full Stack",
  bio = "Criador de interfaces eficientes e intuitivas. Especialista em desenvolvimento web, focado em performance, usabilidade e inovação. Compartilho minha experiência para ajudar outros desenvolvedores a crescerem no setor..",
  avatarUrl = "/perfil/logo.png",
  backgroundColor = "bg-black",
}: ProfileSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${backgroundColor} py-12 px-4 flex justify-center items-center`}
    >
      <Card className="max-w-4xl w-full bg-black/90 rounded-2xl p-6 md:p-8 border border-black text-white border-opacity-50">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Avatar className="w-100 h-100 md:w-56 md:h-56  overflow-hidden">
              <AvatarImage
                src={avatarUrl}
                alt={name}
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-900 text-white text-2xl">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                {name}
              </h1>
              <h2 className="text-lg     text-[#f52545] font-medium mb-3">{title}</h2>
              <p className="text-gray-300 mb-4 max-w-lg leading-relaxed">
                {bio}
              </p>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProfileSection;