import { useState } from "react";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import Button from "./Button";
import PersonalInfoForm from "./PersonalInfoForm";
import { Form, Formik, useFormik } from "formik";
import EducationInfoForm from "./EducationInfoForm";

const ResumeForm = () => {
  const [step, setStep] = useState(1);
  const { personalInfo, setPersonalInfo, education, setEducation } =
    useResumeInfo();

  const handleNextClick = (formik) => {
    formik.validateForm().then((errors) => {
      console.log(formik.values)
      if (Object.keys(errors).length === 0) {
        if (step == 1) {
          setPersonalInfo(formik.values.personalInfo);
        } else if (step == 2) {
          setEducation(formik.values.educationInfo);
        }
        setStep((prev) => prev + 1);
      } else {
        console.log("Form has errors: ", errors);
      }
    });
  };
  const handlePrevClick = (formik) => {
    if (step == 2) {
      setEducation(formik.values.educationInfo);
    }
    setStep((prev) => prev - 1);
  };
  
  return (
    <div>
       <Formik
       initialValues= {{
        personalInfo: {...personalInfo},
        educationInfo: [...education],
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {( formik ) => (
        <Form>
        {step == 1 && <PersonalInfoForm formik={formik} />}
        {step == 2 && <EducationInfoForm formik={formik} />}
        <div className="mt-4 flex justify-between">
          <Button
            category={step == 1 ? "disabled" : "primary"}
            type="button"
            onClick={()=>handlePrevClick(formik)}
          >
            Back
          </Button>
          <Button category="primary" type="button" onClick={()=>handleNextClick(formik)}>
            Save & Next
          </Button>
        </div>
        </Form>
          )}
      </Formik>
    </div>
  );
};

export default ResumeForm;
