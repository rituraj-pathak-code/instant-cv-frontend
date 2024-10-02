import PersonalInfoForm from "../components/PersonalInfoForm";
import EducationInfoForm from "../components/EducationInfoForm";
import SkillInfoForm from "../components/SkillInfoForm";
import ExperienceInfoForm from "../components/ExperienceInfoForm";
import ProjectsInfoForm from "../components/ProjectsInfoForm";
import DownloadResume from "../components/DownloadResume";

export const stepsConfig = [
    {
      component: PersonalInfoForm,
      label: "Personal Information",
      setter: "setPersonalInfo",
      key: "personalInfo",
    },
    {
      component: EducationInfoForm,
      label: "Education",
      setter: "setEducation",
      key: "educationInfo",
    },
    {
      component: ExperienceInfoForm,
      label: "Experience",
      setter: "setExperience",
      key: "experienceInfo",
    },
    {
      component: ProjectsInfoForm,
      label: "Projects",
      setter: "setProjects",
      key: "projectsInfo",
    },
    {
      component: SkillInfoForm,
      label: "Skills",
      setter: "setSkills",
      key: "skillsInfo",
    },
    {
      component: DownloadResume,
      label: "Download",
      isFinalStep: true,
    },
  ];