import Button from "../components/Button";
import { fetchResume } from "../config";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import axios from "axios";

const DownloadResume = () => {
  const { personalInfo, education, skills, experience, projects } =
    useResumeInfo();

  const downloadResume = async () => {
   const res = await fetchResume(personalInfo, education, skills, experience, projects )

   console.log(res)

  };
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-8">
      <h2 className="text-xl font-bold">Your Job Ready Resume us Ready!</h2>
      <div>
        <Button onClick={downloadResume} category="success" size="large">
          DOWNLOAD
        </Button>
      </div>
    </div>
  );
};

export default DownloadResume;
