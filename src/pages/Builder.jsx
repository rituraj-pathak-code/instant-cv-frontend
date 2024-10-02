import { useParams } from "react-router-dom";
import ResumeForm from "../components/ResumeForm";
import Template from "../components/Template";
import { ResumeInfoProvider } from "../contexts/ResumeInfoContext";

const Builder = () => {
  const { id: resumeId } = useParams();

  return (
    <ResumeInfoProvider>
        <div className="w-full mt-12 mb-24">
            <h2 className="text-[#13287E] font-bold text-2xl my-4 text-center">
            Fill Your Information
            </h2>
            <div className="flex gap-8">
            <div className="w-[50%] py-4">
                <ResumeForm />
            </div>
            <div className="w-[50%] py-4 px-4 bg-[#fffaea] h-fit my-4">
                <Template />
            </div>
            </div>
        </div>
    </ResumeInfoProvider>
  );
};

export default Builder;
