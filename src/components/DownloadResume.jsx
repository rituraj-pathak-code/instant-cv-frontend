import Button from "../components/Button";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import axios from "axios";

const DownloadResume = () => {
  const { personalInfo, education, skills, experience, projects } =
    useResumeInfo();

  const downloadResume = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    try{
      const res = await axios.post(
        "http://localhost:8000/api/create-resume",
        { personalInfo, education, skills, experience, projects },
        { headers, responseType: 'blob'  }
      );
      console.log(res)
      // Create a URL for the PDF Blob
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${personalInfo.firstName}_${personalInfo.lastName}_Resume.pdf`); // Set the file name
      document.body.appendChild(link);
      link.click(); // Trigger the download
      link.remove(); // Clean up the link element
    }catch(err){
      console.log(err)
    }
    
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
