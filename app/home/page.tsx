import React from "react";
import Card from "@/components/home/card";
import HomeIntro from "@/components/home/intro";

type CardData = {
  title: string;
  description: string;
  footer?: React.ReactNode;
};

const Homepage: React.FC = () => {
  const cards: CardData[] = [
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
    { title: "Title Card", description: "Isi Card yang dapat Anda isi dengan teks atau gambar.", footer: (<><span>User</span><span>Indonesia</span></>) },
  ];

  return (
    <div>
    <HomeIntro />
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-wrap -mx-4">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
            <Card title={card.title} description={card.description} footer={card.footer} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Homepage;
