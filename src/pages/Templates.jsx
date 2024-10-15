import resumeone from "../assets/resume1.png";
import resumethree from "../assets/resume3.png";

import TemplateCard from "../components/TemplateCard";
import { templatePageTexts } from "../constants/texts";

const Templates = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 py-4 sm:py-8">
        <h2 className="text-[#13287E] font-bold text-2xl sm:text-3xl">
         {templatePageTexts?.header}
        </h2>
        <p className="text-gray-500 text-center sm:text-base text-sm">
         {templatePageTexts?.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-8 pb-12 pt-4 lg:justify-normal justify-center">
        <TemplateCard image={resumeone} resumeId = {1}/>
        <TemplateCard image={resumethree} resumeId = {2}/>
      </div>
    </>
  );
};

export default Templates;
