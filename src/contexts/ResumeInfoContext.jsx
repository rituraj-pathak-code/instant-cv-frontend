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
    leetcode: ""
  }) 
  const [education, setEducation] = useState([{
    degree: "",
    institute: "",
    start_date: "",
    end_date: ""
  }])
  return <ResumeContext.Provider value={{ personalInfo,education, setPersonalInfo,setEducation }}>{children}</ResumeContext.Provider>;
};

export const useResumeInfo = () => {
  const context = useContext(ResumeContext);

  if(!context){
    throw Error("useResumeInfo hook used outside ResumeProvider")
  }

  return context;
}


