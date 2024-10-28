import { useEffect, useState } from "react";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import Button from "./Button";
import { Form, Formik } from "formik";
import { stepsConfig } from "../config/formSteps.js";
import validationSchemas from "../schema/resumeFormSchema.js";
import { errorDisplayForResumeForms } from "../config/util.js";
import { editResume, postResume } from "../config/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResumeForm = ({ isEdit, resumeId, resumeTemplateId }) => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const {
    personalInfo,
    setPersonalInfo,
    education,
    setEducation,
    skills,
    setSkills,
    experience,
    setExperience,
    projects,
    setProjects,
  } = useResumeInfo();

  const setters = {
    setPersonalInfo,
    setEducation,
    setSkills,
    setExperience,
    setProjects,
  };

  const saveResume = async (formik) => {
    setLoading(true)
    if (isEdit) {
      const res = await editResume(
        resumeId,
        formik.values?.personalInfo,
        formik.values?.educationInfo,
        formik.values?.skillsInfo,
        formik.values?.experienceInfo,
        formik.values?.projectsInfo
      );
      if (res.status == 200 || res.status == 201) {
        setLoading(false)
        setStep((prev) => prev + 1);
        toast.success("Resume saved!");
      } else if (res.status == 401) {
        navigate("/login");
        toast.warn("Session Expired");
      } else {
        setLoading(false)
        toast.error("Something went wrong!");
      }
    } else {
      const res = await postResume(
        formik.values?.personalInfo,
        formik.values?.educationInfo,
        formik.values?.skillsInfo,
        formik.values?.experienceInfo,
        formik.values?.projectsInfo,
        resumeTemplateId
      );
      if (res.status == 200 || res.status == 201) {
        setLoading(false)
        setStep((prev) => prev + 1);
        toast.success("Resume saved!");
      } else if (res.status == 401) {
        navigate("/login");
        toast.warn("Session Expired");
      } else {
        setLoading(false)
        toast.error("Something went wrong!");
      }
    }
  };

  const handleNextClick = (formik) => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        const currentStep = stepsConfig[step];
        const setter = setters[currentStep.setter];
        setter(formik.values[currentStep.key]);
        if (step == stepsConfig.length - 2) {
          saveResume(formik);
        } else {
          setStep((prev) => prev + 1);
        }
        
      } else {
        const key = stepsConfig[step].key;
        const currentError = errors[key];
        errorDisplayForResumeForms(currentError);
      }
    });

  };

  const handlePrevClick = (formik) => {
    const currentStepConfig = stepsConfig[step];
    if (!currentStepConfig.isFinalStep) {
      const setter = setters[currentStepConfig.setter];
      setter(formik.values[currentStepConfig.key]);
      setStep((prev) => prev - 1);
    } else {
      setStep((prev) => prev - 1);
    }
  };


  return (
    <div>
      <p className="mb-[5px] text-white font-semibold text-[9px] bg-[#FE7D8B] py-[4px] px-2 w-fit rounded-full">
        {(step / (stepsConfig.length - 1)) * 100}% Complete
      </p>
      <div className="bg-gray-300 w-full">
        <div
          className={`h-[3px] bg-[#FE7D8B] rounded transition`}
          style={{ width: `${(step / (stepsConfig.length - 1)) * 100}%` }}
        ></div>
      </div>
      <Formik
        initialValues={{
          personalInfo: { ...personalInfo },
          educationInfo: [...education],
          skillsInfo: [...skills],
          experienceInfo: [...experience],
          projectsInfo: [...projects],
        }}
        validationSchema={validationSchemas[step]}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {stepsConfig.map((item, index) => {
              if (index == step) {
                const Component = item.component;
                if (item.isFinalStep) {
                  return <Component key={index} />;
                } else {
                  return <Component key={index} formik={formik} />;
                }
              }
              return null;
            })}

            {!stepsConfig[step].isFinalStep && (
              <div className="mt-4 flex justify-between">
                <Button
                  category={step == 0 ? "disabled" : "primary"}
                  type="button"
                  onClick={() => handlePrevClick(formik)}
                  size="small"
                >
                  Back
                </Button>
                <Button
                  category={
                    step == stepsConfig.length - 2 ? loading ? "disabled":"error" : "primary"
                  }
                  type="button"
                  onClick={() => handleNextClick(formik)}
                  size="small"
                >
                  {step == stepsConfig.length - 2 ? loading? "Please wait..." : "Finish & Next" : "Next"}
                </Button>
              </div>
            )}

            {stepsConfig[step].isFinalStep && (
              <p className="text-sm text-center my-4">
                Missed something? You can go back by clicking{" "}
                <span
                  onClick={() => handlePrevClick(formik)}
                  className="text-blue-800 font-semibold cursor-pointer"
                >
                  here
                </span>
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResumeForm;
