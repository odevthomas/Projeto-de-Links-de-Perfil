import React from "react";
import { motion } from "framer-motion";
import { Code, Target, Globe, Linkedin, Twitter } from "lucide-react";

interface ProfileSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  backgroundColor?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  skills?: string[];
}

const GitHubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
  >
    <path
      fillRule="evenodd"
      d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.117-3.135 0 0 1.007-.324 3.3 1.23a11.52 11.52 0 013.003-.404 11.52 11.52 0 013.003.404c2.29-1.554 3.3-1.23 3.3-1.23.656 1.612.255 2.832.12 3.135.77.84 1.234 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.92.43.37.813 1.1.813 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.218.7.825.583C20.565 21.795 24 16.3 24 12c0-6.627-5.373-12-12-12z"
      clipRule="evenodd"
    />
  </svg>
);

const ProfileSection = ({
  name = "Thomas Eduardo",
  title = "Desenvolvedor Web Full Stack",
  bio = "Criador de interfaces eficientes e intuitivas. Especialista em desenvolvimento web, focado em performance, usabilidade e inovação. Compartilho minha experiência para ajudar outros desenvolvedores a crescerem no setor.",
  avatarUrl = "/perfil/thomas.png",
  backgroundColor = "bg-black",
  socialLinks = {
    linkedin: "https://linkedin.com/in/odevthomas",
    github: "https://github.com/odevthomas",
    twitter: "https://twitter.com/odevthomas"
  },
  skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Docker"]
}: ProfileSectionProps) => {
  const { linkedin, github, twitter } = socialLinks || {};

  return (
    <section className={`w-full ${backgroundColor} py-20 px-4 flex justify-center items-center`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-black rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/10 z-10"
      >
        <div className="grid md:grid-cols-[280px_1fr] gap-10 p-8 md:p-12">
          {/* Coluna de Perfil */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="mb-8 w-32 h-32 rounded-full overflow-hidden border border-gray-100/30 shadow-lg shadow-gray-100/20"
            >
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

           
          </div>

          {/* Coluna de Conteúdo */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{name}</h1>
              <h2 className="text-xl text-red-500 font-medium mb-6 flex items-center">
                <span className="mr-2 h-1 w-6 bg-red-500 rounded-full"></span>
                {title}
              </h2>
              <p className="text-zinc-300 mb-8 leading-relaxed text-lg">{bio}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Code className="mr-2 text-red-500" size={20} />
                  Principais Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                      className="bg-zinc-800 text-zinc-200 px-4 py-2 rounded-xl text-sm font-medium border border-zinc-700 hover:border-red-500/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Botões de Ação - Redesenhados 
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300"
                >
                  <Target className="mr-2" size={20} />
                  Entre em Contato
                </motion.a>

                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
                >
                  <Globe className="mr-2" size={20} />
                  Ver Portfólio
                </motion.a>
              </div>
              */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;