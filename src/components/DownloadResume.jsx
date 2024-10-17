import { toast } from "react-toastify";
import Button from "../components/Button";
import { downloadResume, editResume, postResume } from "../config";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DownloadResume = () => {
  const [loading,setLoading] = useState(false) 
  const navigate = useNavigate();
  const { personalInfo, education, skills, experience, projects } =
    useResumeInfo();

  const downloadResumeHandler = async () => {
    setLoading(true)
    const res = await downloadResume(
      personalInfo,
      education,
      skills,
      experience,
      projects
    );
    if (res.status == 401) {
      navigate("/login");
      toast.warn("Session expired");
    } 
    setLoading(false)
   
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-8">
      <h2 className="text-xl font-bold text-center">
        Your Job Ready Resume is Ready!
      </h2>
      <div>
        <Button onClick={downloadResumeHandler} category={loading ? "disabled":"success"} size="large" disabled={loading}>
          {loading ? "Downloading..." : "DOWNLOAD"}
        </Button>
      </div>
    </div>
  );
};

export default DownloadResume;
