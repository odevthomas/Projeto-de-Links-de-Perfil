import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

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
  avatarUrl = "/perfil/logo.svg",
  backgroundColor = "bg-black",
  socialLinks = {
    linkedin: "https://linkedin.com/in/odevthomas",
    github: "https://github.com/odevthomas",
    twitter: "https://twitter.com/odevthomas"
  },
  skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Banco de Dados", "Express",]
}: ProfileSectionProps) => {
  return (
    <section className={`w-full ${backgroundColor} py-20 px-4 flex justify-center items-center`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-black/50 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md border border-white/10"
      >
        
       <div className="md:flex md:items-center md:gap-10">

          {/* Conteúdo */}
          <div className="text-white mt-6 md:mt-0">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-red-500 text-xl font-medium mt-1">{title}</p>
            <p className="mt-4 text-zinc-300 leading-relaxed">{bio}</p>

            {/* Habilidades */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Code className="text-red-500 mr-2" size={20} />
                Habilidades
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;
