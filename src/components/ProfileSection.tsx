import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

interface ProfileSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  socialLinks?: SocialLink[];
  backgroundColor?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "Twitter",
    url: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    platform: "Instagram",
    url: "https://instagram.com",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    platform: "Github",
    url: "https://github.com",
    icon: <Github className="h-5 w-5" />,
  },
  {
    platform: "Email",
    url: "mailto:hello@example.com",
    icon: <Mail className="h-5 w-5" />,
  },
];

const ProfileSection = ({
  name = "Jane Doe",
  title = "Digital Creator & Developer",
  bio = "Digital creator & web developer passionate about creating beautiful, functional experiences. Sharing my journey and connecting with like-minded individuals.",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=profile&backgroundColor=b6e3f4",
  socialLinks = defaultSocialLinks,
  backgroundColor = "bg-black",
}: ProfileSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${backgroundColor} py-12 px-4 flex justify-center items-center`}
    >
      <Card className="max-w-4xl w-full bg-gray-900/90 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 border border-gray-800 border-opacity-50">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Avatar className="w-28 h-28 md:w-36 md:h-36 border-4 border-white border-opacity-20 shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-full overflow-hidden">
              <AvatarImage
                src={avatarUrl}
                alt={name}
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-900 text-white text-2xl">
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
              <h2 className="text-lg text-primary font-medium mb-3">{title}</h2>
              <p className="text-gray-300 mb-4 max-w-lg leading-relaxed">
                {bio}
              </p>
            </motion.div>

            {socialLinks.length > 0 && (
              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-200 hover:bg-white hover:text-black transition-colors duration-200"
                    aria-label={`Visit ${link.platform}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.5, duration: 0.3 }}
                  >
                    {link.icon || (
                      <span className="text-sm font-medium">
                        {link.platform.charAt(0)}
                      </span>
                    )}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProfileSection;
