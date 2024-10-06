import Button from "./Button";
import { useNavigate } from "react-router-dom";


const TemplateCard = ({ image, resumeId}) => {
    const navigate = useNavigate()
  return (
    <>
      <div className="shadow-xl">
        <div>
          <img src={image} className="w-[30vw]" alt="resumeone" />
        </div>
        <div className="py-4 px-4 flex justify-end border-t">
          <Button size="small" category="info" onClick={() => navigate(`/resume-build/${resumeId}`)}>Use Template</Button>
        </div>
      </div>
    </>
  );
};

export default TemplateCard;
