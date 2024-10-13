import { FaLightbulb } from "react-icons/fa6";
import header_pic from "../assets/header_pic.jpg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { bannerTexts } from "../constants/texts";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`h-[85vh] flex gap-8 justify-between items-center banner_blob`}
    >
      <div className="flex flex-col gap-8">
        <span className="flex gap-[5px] items-center bg-[#e8e8ff] text-[#8681FF] font-semibold w-fit py-2 px-2 rounded-full">
          <FaLightbulb color="#FDDA0D" />
          <p>{bannerTexts?.tagline}</p>
        </span>
        <h2 className="font-extrabold text-[#13287E] text-5xl">
          {bannerTexts?.header}
        </h2>
        <p className="text-gray-500">{bannerTexts?.description}</p>
        <Button category="primary" onClick={() => navigate("/templates")}>
          Select Template
        </Button>
      </div>
      <div>
        <img src={header_pic} alt="" />
      </div>
    </div>
  );
};

export default Banner;
