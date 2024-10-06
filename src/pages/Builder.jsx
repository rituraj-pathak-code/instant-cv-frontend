import { useNavigate, useParams } from "react-router-dom";
import ResumeForm from "../components/ResumeForm";
import Template from "../components/Template";
import { ResumeInfoProvider } from "../contexts/ResumeInfoContext";

const Builder = () => {
  const { id: resumeId } = useParams();
  const navigate =  useNavigate()

  return (
    <ResumeInfoProvider>
      <div className="w-full h-[100vh] relative">
        <div className="flex h-full">
          <div className="w-[50%] pt-8 px-12 h-full flex flex-col pb-20 overflow-y-auto">
            <div className="mb-4">
              <span onClick={()=>navigate('/')} className="bg-gray-100 py-[3px] px-2 rounded-full text-gray-600 font-semibold cursor-pointer">Home</span>
              <h2 className="text-[#13287E] font-bold text-2xl mt-8">
                Fill Your Information
              </h2>
            </div>
            <ResumeForm />
          </div>
          <div className="w-[50%] px-8 h-full flex justify-center items-center sticky right-0 top-0 dark_gradient">
            <Template />
          </div>
        </div>
      </div>
    </ResumeInfoProvider>
  );
};

export default Builder;
