import resumeone from "../assets/resume_1.jpg";
import TemplateCard from "../components/TemplateCard";
import { templatePageTexts } from "../constants/texts";
import ResumeOne from "../components/resume/ResumeOne"

const Templates = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 my-8">
        <h2 className="text-[#13287E] font-bold text-3xl">
         {templatePageTexts?.header}
        </h2>
        <p className="text-gray-500 w-[80ch] text-center">
         {templatePageTexts?.description}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 pb-12 pt-4">
        <TemplateCard image={resumeone} component={<ResumeOne/>} resumeId = {1}/>
      </div>
    </>
  );
};

export default Templates;
