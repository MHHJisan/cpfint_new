import React from "react";

const HopeSection = () => {
  return (
    <div className="w-full">
      <header
        className="w-full p-3 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex flex-row  p-6 rounded-lg mx-[120px]">
          <div className="w-full max-w-4xl flex flex-col text-left justify-center  space-y-4">
            {/* Heading */}
            <h2 className="text-[60px] font-extrabold text-white mb-4">
              IGNITING SPARKS OF HOPE
            </h2>

            {/* Description */}
            <h6 className="text-[30px] font-bold font-roboto tracking-widest text-white mb-2">
              We are focused on improving the lives of underprivileged rural
              communities in remote areas through the sustainable livelihood
              approach to poverty reduction and education assistance programs.
            </h6>

            {/* Paragraph */}
            <p className="text-base text-slate-300 mb-6">
              We are focused on improving the lives of underprivileged rural
              communities in remote areas through the sustainable livelihood
              approach to poverty reduction and education assistance programs.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-lg flex justify-center">
            <img
              src="https://cpfint.org/wp-content/uploads/2023/11/iftar_distribution9.jpg"
              alt="Iftar Distribution"
              className="h-[500px] rounded-tl-[120px] rounded-br-[120px] shadow-lg w-full"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HopeSection;
