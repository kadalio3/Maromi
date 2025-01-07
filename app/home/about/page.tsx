import React from "react";
import AboutForm from "@/components/home/about/AboutForm";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <div className="p-4 md:p-6 lg:p-12 xl:p-12">
        <AboutForm />
      </div>
    </div>
  );
};

export default AboutPage;
