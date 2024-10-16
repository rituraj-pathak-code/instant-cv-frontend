import Button from "../components/Button";
import { postResume } from "../config";
import { useResumeInfo } from "../contexts/ResumeInfoContext";

const DownloadResume = () => {
  const { personalInfo, education, skills, experience, projects } =
    useResumeInfo();

  const downloadResume = async () => {
   const res = await postResume(personalInfo, education, skills, experience, projects )

   console.log(res)

  };
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-8">
      <h2 className="text-xl font-bold text-center">Your Job Ready Resume is Ready!</h2>
      <div>
        <Button onClick={downloadResume} category="success" size="large">
          DOWNLOAD
        </Button>
      </div>
    </div>
  );
};

export default DownloadResume;
