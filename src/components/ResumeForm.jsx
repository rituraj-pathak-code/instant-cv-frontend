import { useState } from "react";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import Button from "./Button";
import { Form, Formik } from "formik";
import { stepsConfig } from "../config/formSteps.js";
import validationSchemas from "../schema/resumeFormSchema.js";
import { errorDisplayForResumeForms } from "../config/util.js";

const ResumeForm = () => {
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

  const handleNextClick = (formik) => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        const currentStep = stepsConfig[step];
        const setter = setters[currentStep.setter];
        setter(formik.values[currentStep.key]);
        setStep((prev) => prev + 1);
      } else {
        const key = stepsConfig[step].key;
        const currentError = errors[key];
        errorDisplayForResumeForms(currentError)
      }
    });
  };

  const handlePrevClick = (formik) => {
    console.log(formik);
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
                    step == stepsConfig.length - 2 ? "error" : "primary"
                  }
                  type="button"
                  onClick={() => handleNextClick(formik)}
                  size="small"
                >
                  {step == stepsConfig.length - 2
                    ? "Finish & Download"
                    : "Save & Next"}
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
