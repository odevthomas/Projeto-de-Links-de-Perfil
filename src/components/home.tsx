import React from "react";
import ProfileSection from "./ProfileSection";
import BentoGrid from "./BentoGrid";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <ProfileSection />
      <div className="py-8">
        <div className="flex items-center justify-center mb-2">
          <h2 className="text-3xl font-bold text-white mr-2">
            Serviços e Links
          </h2>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Backhand%20Index%20Pointing%20Down.webp"
            alt="Backhand Index Pointing Down"
            width="25"
            height="25"
          />
        </div>
        <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto px-4">
          Explore meus serviços, projetos e conecte-se comigo em várias plataformas.
        </p>
        <BentoGrid />
      </div>
    </div>
  );
}

export default Home;