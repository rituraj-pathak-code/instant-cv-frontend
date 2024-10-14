import { FaCheckDouble } from "react-icons/fa6";
import { features } from "../constants/texts";

const FeaturesSection = () => {
  return (
    <div className="my-12 py-4 w-full section-gradient">
      <h2 className="font-extrabold text-3xl sm:text-4xl lg:w-[15ch] text-[#13287E]">
        Create a Resume that gets results
      </h2>
      <div className="flex flex-wrap gap-8 py-8">
        {features.map((item) => (
          <div className="flex flex-col gap-2" key={item?.id}>
            <div className="flex items-center gap-2">
              <div className="bg-[#008853] w-fit p-2 rounded-full">
                <FaCheckDouble size={20} color="white" />
              </div>
              <h3 className="font-semibold sm:text-lg">{item?.title}</h3>
            </div>
            <p className="text-gray-500 sm:text-base text-sm">{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
