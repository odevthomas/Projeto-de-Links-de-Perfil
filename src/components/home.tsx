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
        <h2 className="text-3xl font-bold text-center mb-2 text-white">
          Meus serviços e links
        </h2>
        <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto px-4">
        Explore meus serviços, projetos e conecte-se comigo em várias plataformas.


        </p>
        <BentoGrid />
      </div>
    </div>
  );
}

export default Home;
