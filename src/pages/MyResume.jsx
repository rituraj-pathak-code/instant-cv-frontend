import resumeone from "../assets/resume1.png";
import { useEffect, useState } from "react";
import { getAllResume } from "../config";
import MyResumeCard from "../components/MyResumeCard";
import { Backdrop, CircularProgress } from "@mui/material";

const MyResume = () => {
  const [loading, setLoading] = useState(false);
  const [resumeList, setResumeList] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchAllResume = async () => {
    setLoading(true);
    const res = await getAllResume(userId);
    if (res) {
      setResumeList(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllResume();
  }, []);

  console.log(resumeList);
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      > <CircularProgress color="inherit" /></Backdrop>
      <div className="py-4 sm:py-8">
        <h2 className="text-[#13287E] font-bold text-2xl sm:text-3xl text-center">
          Your Resumes
        </h2>
        <div className="grid grid-cols-4 gap-8 py-8">
          {resumeList.map((item) => (
            <MyResumeCard data={item} resumeId={1} key={item._id} fetchAllResume={fetchAllResume} setLoading={setLoading} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyResume;
