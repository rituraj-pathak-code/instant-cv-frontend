import resumeImg from "../assets/resume2.png";
import { howitworks } from "../constants/texts";

const HowItWorks = () => {
  return (
    <div className="sm:pt-4 pb-24 w-full flex lg:flex-row flex-col gap-8 lg:justify-between items-center">
      <div className="bg-gray-100 p-4 lg:w-[40%] flex justify-center items-center h-fit">
        <img src={resumeImg} alt=""/>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:w-[60%]">
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:w-[20ch] text-[#13287E]">
          Easiest and most feature-packed CV builder available
        </h2>
        {howitworks.map((item) => (
          <div className="flex flex-col gap-2" key={item?.id}>
            <div className="w-fit rounded-full flex items-center sm:text-lg gap-2 text-[#3F75E4]">
              <p className="font-bold">{item?.id}.</p>
              <h3 className="font-bold">{item?.title}</h3>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
