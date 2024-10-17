import resumeone from "../assets/resume1.png";
import { useEffect, useState } from "react";
import { getAllResume } from "../config";
import MyResumeCard from "../components/MyResumeCard";
import { Backdrop, CircularProgress, Pagination } from "@mui/material";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyResume = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [resumeList, setResumeList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(null);
  const [limit, setLimit] = useState(null);
  const userId = localStorage.getItem("userId");

  const fetchAllResume = async () => {
    setLoading(true);
    const res = await getAllResume(userId, page);
    if (res.status == 200) {
      setResumeList(res.data.data);
      setTotalRecords(res.data.totalRecords);
      setLimit(res.data.limit);
    } else if (res.status == 401) {
      navigate("/login");
      toast.warn("Session expired", { toastId: "session_expired" });
    } else {
      toast.error("Something went wrong", { toastId: "resume_went_wrong" });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllResume();
  }, [page]);

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
        onClick={() => setLoading(false)}
      >
        {" "}
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="py-4 sm:py-8">
        <h2 className="text-[#13287E] font-bold text-2xl sm:text-3xl text-center pt-4">
          Your Resumes
        </h2>
        <div className="grid-container pt-8 sm:pt-20 pb-6">
          {resumeList.map((item) => (
            <MyResumeCard
              data={item}
              resumeId={1}
              key={item._id}
              fetchAllResume={fetchAllResume}
              setLoading={setLoading}
            />
          ))}
        </div>
        {resumeList.length > 0 && (
          <div className="flex justify-center sm:justify-end my-4">
            <Pagination
              count={Math.ceil(totalRecords / limit)}
              page={page}
              onChange={(e, value) => setPage(value)}
              size="large"
              color="secondary"
              variant="outlined"
            />
          </div>
        )}
        {resumeList.length == 0 && (
          <div className="flex justify-center p-4 bg-gray-50 shadow">
            <p>No resume found!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyResume;
