import { useEffect, useState } from "react";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteResume } from "../config";
import { toast } from "react-toastify";
import DeleteDialog from "./DeleteDialog";
import { useResumeInfo } from "../contexts/ResumeInfoContext";

const MyResumeCard = ({ data, resumeId, fetchAllResume, setLoading }) => {
;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const deleteHandler = async () => {
    setLoading(true);
    const res = await deleteResume(data?._id);

    if (res.status === 200) {
      toast.success("Resume Deleted Successfully!");
      fetchAllResume();
    } else {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };


  return (
    <>
      <div className="shadow-xl">
        <div>
          <img
            src={`${data?.image}`}
            className="w-full h-[20rem]"
            alt="resumeone"
          />
        </div>
        <div className="py-4 px-4 flex justify-between border-t">
          <Button size="small" category="error" onClick={() => setIsOpen(true)}>
            Delete
          </Button>
          <Button
            size="small"
            category="info"
            onClick={() => navigate(`/resume-build/${resumeId}`, {state: {data: data}})}
          >
            Edit
          </Button>
        </div>
      </div>

      <DeleteDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default MyResumeCard;
