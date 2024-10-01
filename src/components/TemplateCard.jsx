import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal"
import { useNavigate } from "react-router-dom";


const TemplateCard = ({ image,component, resumeId}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
  return (
    <>
      <div className="shadow-xl hover:shadow-red-300">
        <div>
          <img src={image} className="w-[30vw]" alt="resumeone" />
        </div>
        <div className="py-6 px-4 flex justify-between">
          <Button category="success" onClick={()=> setIsModalOpen(true)} outlined>
            See Template
          </Button>
          <Button category="info" onClick={() => navigate(`/resume-build/${resumeId}`)}>Use Template</Button>
        </div>
      </div>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} content={component} resumeId={resumeId}/>
    </>
  );
};

export default TemplateCard;
