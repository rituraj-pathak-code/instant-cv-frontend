import { FaLightbulb } from "react-icons/fa6";
import header_pic from "../assets/header_pic.jpg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { bannerTexts } from "../constants/texts";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 justify-between items-center`}
    >
      <div className="flex flex-col gap-8 lg:banner_blob h-full justify-center pt-12 md:pt-28 pb-4">
        <span className="flex gap-[5px] items-center bg-[#e8e8ff] text-[#8681FF] font-semibold w-fit py-2 px-2 rounded-full">
          <FaLightbulb color="#FDDA0D" />
          <p className="sm:text-base text-sm">{bannerTexts?.tagline}</p>
        </span>
        <h2 className="font-extrabold text-[#13287E] text-4xl sm:text-5xl">
          {bannerTexts?.header}
        </h2>
        <p className="text-gray-500 sm:text-base text-sm">{bannerTexts?.description}</p>
        <Button category="primary" onClick={() => navigate("/templates")}>
          Select Template
        </Button>
      </div>
      <div className="lg:pt-28 pb-4 md:w-[70vw]">
        <img src={header_pic} alt="" className="min-w-[300px]  lg:max-w-[500px] m-auto" />
      </div>
    </div>
  );
};

export default Banner;
