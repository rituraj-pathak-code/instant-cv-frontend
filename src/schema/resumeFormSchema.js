import * as Yup from "yup";

const personalInfoSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First Name is Too Short!")
      .max(50, "First Name is Too Long!")
      .required("First Name is Required"),
    lastName: Yup.string()
      .min(2, "Last Name Too Short!")
      .max(50, "Last Name Too Long!")
      .required("Last Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    github: Yup.string()
      .url("Enter a valid URL")
      .required("Github link is required"),
    linkedin: Yup.string()
      .url("Enter a valid URL")
      .required("Linkedin Link is required"),
  }),
});

const educationSchema = Yup.object().shape({
  educationInfo: Yup.array().of(
    Yup.object().shape({
      degree: Yup.string().required("Degree is required"),
      institute: Yup.string().required("Institution name is required"),
      start_date: Yup.string().required("Start year is required"),
      end_date: Yup.string().required("End year is required"),
    })
  ),
});

const experienceSchema = Yup.object().shape({
    experienceInfo: Yup.array().of(
      Yup.object().shape({
        role: Yup.string().required("Role is required"),
        company: Yup.string().required("Institution name is required"),
        start_date: Yup.string().required("Start year is required"),
        end_date: Yup.string().required("End year is required"),
        description: Yup.array()
        .of(Yup.string().trim().required("Description cannot be empty"))
        .min(1, "At least one description is required")
      })
    ),
  });

  const projectSchema = Yup.object().shape({
    projectsInfo: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Project Title is required"),
        link: Yup.string().url("Enter a valid URL"),
        description: Yup.string().required("Project Description is required"),
      })
    ),
  });

  const skillSchema = Yup.object().shape({
    skillsInfo: Yup.array().of(
      Yup.object().shape({
        skill_type: Yup.string().required("Skill Type is required"),
        skills: Yup.array()
        .of(Yup.string().trim().required("Skill cannot be empty"))
        .min(3, "At least three skill is required for a particular Skill Type")
      })
    ),
  });

const validationSchemas = [personalInfoSchema, educationSchema, experienceSchema, projectSchema,skillSchema];
export default validationSchemas;
