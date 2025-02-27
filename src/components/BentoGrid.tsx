import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import LinkCard from "./LinkCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  FileText,
  Globe,
  Mail,
  Music,
  Video,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  ExternalLink,
} from "lucide-react";

interface BentoGridItem {
  id: string;
  type: "service" | "link";
  title: string;
  description?: string;
  icon?: React.ElementType;
  imageUrl?: string;
  url?: string;
  bgColor?: string;
  gridSpan?: "small" | "medium" | "large";
  featured?: boolean;
  category?: string;
}

interface BentoGridProps {
  items?: BentoGridItem[];
  className?: string;
  categories?: string[];
}

const defaultItems: BentoGridItem[] = [
  {
    id: "1",
    type: "service",
    title: "Web Development",
    description:
      "Custom websites built with modern technologies and best practices for optimal performance and user experience.",
    icon: Globe,
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=400&auto=format&fit=crop&sat=-100",
    url: "#web-development",
    bgColor: "bg-gray-900",
    gridSpan: "large",
    featured: true,
    category: "Services",
  },
  {
    id: "2",
    type: "service",
    title: "Content Creation",
    description:
      "High-quality content for your brand and social media presence that engages your audience and drives growth.",
    icon: FileText,
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop&sat=-100",
    url: "#content-creation",
    bgColor: "bg-gray-800",
    gridSpan: "medium",
    category: "Services",
  },
  {
    id: "3",
    type: "link",
    title: "GitHub",
    description: "Check out my open source projects and contributions.",
    icon: Github,
    url: "https://github.com",
    bgColor: "bg-gray-900",
    category: "Social",
  },
  {
    id: "4",
    type: "service",
    title: "Video Production",
    description:
      "Professional video editing and production services for your brand, from concept to final delivery.",
    icon: Video,
    imageUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=400&auto=format&fit=crop&sat=-100",
    url: "#video-production",
    bgColor: "bg-gray-800",
    gridSpan: "medium",
    category: "Services",
  },
  {
    id: "5",
    type: "link",
    title: "Contact Me",
    description: "Get in touch for collaborations and inquiries.",
    icon: Mail,
    url: "mailto:contact@example.com",
    bgColor: "bg-gray-900",
    category: "Contact",
  },
  {
    id: "6",
    type: "link",
    title: "Spotify",
    description: "Listen to my playlists and favorite music.",
    icon: Music,
    url: "https://spotify.com",
    bgColor: "bg-gray-800",
    category: "Social",
  },
  {
    id: "7",
    type: "link",
    title: "Instagram",
    description: "Follow my creative journey and daily updates.",
    icon: Instagram,
    url: "https://instagram.com",
    bgColor: "bg-gray-900",
    category: "Social",
  },
  {
    id: "8",
    type: "link",
    title: "LinkedIn",
    description: "Connect professionally and see my work experience.",
    icon: Linkedin,
    url: "https://linkedin.com",
    bgColor: "bg-gray-800",
    category: "Social",
  },
  {
    id: "9",
    type: "link",
    title: "Twitter",
    description:
      "Join the conversation and stay updated with my latest thoughts.",
    icon: Twitter,
    url: "https://twitter.com",
    bgColor: "bg-gray-900",
    category: "Social",
  },
  {
    id: "10",
    type: "link",
    title: "YouTube",
    description: "Watch my tutorials, vlogs, and creative content.",
    icon: Youtube,
    url: "https://youtube.com",
    bgColor: "bg-gray-800",
    category: "Social",
  },
  {
    id: "11",
    type: "service",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive and engaging digital experiences.",
    icon: ExternalLink,
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop&sat=-100",
    url: "#design",
    bgColor: "bg-gray-900",
    gridSpan: "medium",
    category: "Services",
  },
];

const BentoGrid = ({
  items = defaultItems,
  className = "",
  categories = ["All", "Services", "Social", "Contact"],
}: BentoGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Filter items based on active category
    if (activeCategory === "All") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => item.category === activeCategory),
      );
    }
  }, [activeCategory, items]);

  useEffect(() => {
    // Simulate loading for smoother animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Container animation for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black ${className}`}
    >
      {/* Category Filter */}
      <div className="flex justify-center mb-8 overflow-x-auto py-2 sticky top-0 z-10 bg-black/80 backdrop-blur-sm">
        <div className="flex space-x-2 p-1 bg-gray-800/50 rounded-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-white shadow-sm text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover="hover"
                className={`${item.gridSpan === "large" ? "sm:col-span-2 sm:row-span-2" : item.gridSpan === "medium" ? "sm:col-span-2" : ""}`}
                layout
              >
                {item.type === "service" ? (
                  <ServiceCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    imageUrl={item.imageUrl}
                    bgColor={item.bgColor}
                    gridSpan={item.gridSpan}
                    url={item.url}
                    featured={item.featured}
                  />
                ) : (
                  <LinkCard
                    title={item.title}
                    description={item.description}
                    icon={
                      item.icon &&
                      React.createElement(item.icon, { className: "h-5 w-5" })
                    }
                    url={item.url || "#"}
                    color={item.bgColor}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BentoGrid;
