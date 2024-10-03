import { createContext, useState } from "react";
import { useContext } from "react";

const ResumeContext = createContext();

export const ResumeInfoProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    github: "",
    linkedin: "",
    portfolio: "",
    leetcode: "",
  });
  const [education, setEducation] = useState([
    {
      degree: "",
      institute: "",
      start_date: "",
      end_date: "",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      skill_type: "",
      skills: ["","",""],
    },
  ]);
  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      start_date: "",
      end_date: "",
      description: [""]
    },
  ]);
  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      link: "",
    },
  ]);
  return (
    <ResumeContext.Provider
      value={{
        personalInfo,
        education,
        skills,
        setPersonalInfo,
        setEducation,
        setSkills,
        experience,
        setExperience,
        projects,
        setProjects
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeInfo = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw Error("useResumeInfo hook used outside ResumeProvider");
  }

  return context;
};
