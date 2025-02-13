const PageTitle = ({ text }: { text: string }) => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-white text-2xl font-bold">
      {/* Background images */}
      <div className="absolute inset-0 flex bg-black bg-opacity-50">
        <div
          className="w-1/3 h-full bg-cover bg-center px-2"
          style={{
            backgroundImage: "url('/financial_aid_to_flood/fatf1.jpeg')",
          }}
        ></div>
        <div
          className="w-1/3 h-full bg-cover bg-center px-4"
          style={{ backgroundImage: "url('/Flood_Project_2024/6.jpg')" }}
        ></div>
        <div
          className="w-1/3 h-full bg-cover bg-center px-8"
          style={{
            backgroundImage: "url('/iftar_distribution-2023/File_019.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Centered text */}
      <div className="relative text-6xl font-bold font-poppins px-6 py-4 border-none shadow-none ">
        {text}
      </div>
    </div>
  );
};

export default PageTitle;
