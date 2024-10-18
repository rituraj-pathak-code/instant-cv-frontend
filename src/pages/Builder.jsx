import { useNavigate, useParams } from "react-router-dom";
import ResumeForm from "../components/ResumeForm";
import Template from "../components/ResumeTemplates/TemplateOne";
import Template2 from "../components/ResumeTemplates/TemplateTwo";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useResumeInfo } from "../contexts/ResumeInfoContext";

const Builder = () => {
  const {
    setPersonalInfo,
    setEducation,
    setSkills,
    setExperience,
    setProjects,
    resetResumeItems,
  } = useResumeInfo();
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();
  const { id: resumeTemplateId } = useParams();
  const navigate = useNavigate();

  const resumeData = location.state;


  useEffect(() => {
    if (resumeData?.data) {
      setPersonalInfo(resumeData?.data?.personalInfo);
      setEducation(resumeData?.data?.education);
      setSkills(resumeData?.data?.skills);
      setExperience(resumeData?.data?.experience);
      setProjects(resumeData?.data?.projects);
      setIsEdit(true);
    }

    return () => {
      resetResumeItems();
    };
  }, [resumeData,isEdit]);

  return (
    <div className="bg-gray-100">
      <div className="w-full h-[100vh] relative max-w-[1600px] m-auto bg-white">
        <div className="flex h-full">
          <div className="w-full md:w-[40%] lg:w-[50%] pt-8 px-4 lg:px-12 h-full flex flex-col pb-20 overflow-y-auto">
            <div className="mb-4">
              <span
                onClick={() => navigate("/")}
                className="bg-gray-100 py-[3px] px-2 rounded-full text-gray-600 font-semibold cursor-pointer"
              >
                Home
              </span>
              <h2 className="text-[#13287E] font-bold text-2xl mt-8">
                Fill Your Information
              </h2>
            </div>
            <ResumeForm isEdit={isEdit} resumeId={resumeData?.data._id} key={isEdit} resumeTemplateId = {resumeTemplateId} />
          </div>
          <div className="w-[60%] lg:w-[50%] px-4 md:px-8 h-full hidden md:flex justify-center items-center sticky right-0 top-0 dark_gradient">
            {resumeTemplateId == 1 && <Template />}
            {resumeTemplateId == 2 && <Template2 />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
