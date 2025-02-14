import React from "react";

const HopeSection = () => {
  return (
    <div className="w-full">
      <header
        className="w-full p-4 sm:p-6 lg:p-8 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-lg leading-[1.7] transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left justify-center space-y-4 px-4">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              IGNITING SPARKS OF HOPE
            </h2>

            {/* Description */}
            <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-roboto tracking-wide text-white">
              We are focused on improving the lives of underprivileged rural
              communities in remote areas through sustainable livelihood
              approaches and education assistance programs.
            </h6>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-slate-300">
              Our goal is to uplift rural communities by addressing poverty
              through long-term, sustainable solutions.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <img
              src="/iftar_distribution-2023/File_011.png"
              alt="Iftar Distribution"
              className="w-full max-w-[400px] sm:max-w-[500px] h-auto rounded-tl-[80px] sm:rounded-tl-[120px] 
              rounded-br-[80px] sm:rounded-br-[120px] shadow-lg"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HopeSection;
