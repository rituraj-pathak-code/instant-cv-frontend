import TextField from "./TextField";
import Button from "../components/Button";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import { FieldArray } from "formik";
import { FaRegTrashAlt } from "react-icons/fa";

const EducationInfoForm = ({ formik }) => {
  const { education } = useResumeInfo();
  console.log(formik.values.educationInfo)
  return (
    <div>
      <h3 className="py-2 font-semibold px-2 bg-[#cecdff] rounded text-white">
        Education
      </h3>
      <FieldArray name="educationInfo">
        {({ insert, remove, push }) => (
          <>
            {formik.values.educationInfo?.map((_, index) => (
              <div
                className="grid grid-cols-2 gap-4 mt-2 px-[12px] pt-4 pb-8 shadow-sm relative"
                key={index}
              >
                {index!==0 && 
                    <button className="absolute right-2 top-2 bg-red-200 p-[4px] rounded-full" onClick={()=>remove(index)}>
                    <FaRegTrashAlt color="red"/>
                </button>
                
                }
                
                <TextField
                  label={"Degree"}
                  name={`educationInfo[${index}].degree`}
                  onChange={formik?.handleChange}
                  value={formik.values.educationInfo[index].degree}
                />
                <TextField
                  label={"College/Institute"}
                  name={`educationInfo[${index}].institute`}
                  onChange={formik?.handleChange}
                  value={formik.values.educationInfo[index].institute}
                />
                <TextField
                  label={"Start Year"}
                  name={`educationInfo[${index}].start_date`}
                  onChange={formik?.handleChange}
                  value={formik.values.educationInfo[index].start_date}
                />
                <TextField
                  label={"Passout Year"}
                  name={`educationInfo[${index}].end_date`}
                  onChange={formik?.handleChange}
                  value={formik.values.educationInfo[index].end_date}
                />
              </div>
            ))}
            <div className="flex justify-end my-4">
              <Button
                size="small"
                category={formik.values.educationInfo.length>2 ? "disabled" : "success"}
                outlined
                onClick={() =>
                  push({
                    degree: "",
                    institute: "",
                    start_date: "",
                    end_date: "",
                  })
                }
              >
                Add More
              </Button>
            </div>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default EducationInfoForm;
