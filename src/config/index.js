import axios from "axios";

export const DEV_BASE_URL = "http://localhost:8000";
export const BASE_URL = "https://instant-cv-backend.vercel.app";

export const signup = async (name,username, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/signup`,
      { name,username,password },
      { withCredentials: true }
    );
    if (response.status == 201) {
      return response;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return err;
  }
};


export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/login`,
      {username, password},
      { withCredentials: true }
    );
    if (response.status == 200) {
      return response;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/logout`,
      {},
      { withCredentials: true }
    );
    if (response.status == 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const fetchUserData = async (_id) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/userData`,
      { _id: _id },
      { withCredentials: true }
    );
    if (response.status == 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const postResume = async (
  personalInfo,
  education,
  skills,
  experience,
  projects,
  templateId
) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(
      `${BASE_URL}/api/resume`,
      { personalInfo, education, skills, experience, projects, templateId },
      {
        withCredentials: true,
        headers,
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAllResume = async (userId, page) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/resumes/${userId}?page=${page}`,
      {
        withCredentials: true,
      }
    );
    if (res) {
      return res;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};

export const deleteResume = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/resume/${id}`, {
      withCredentials: true,
    });
    if (res) {
      return res;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const editResume = async (
  resumeId,
  personalInfo,
  education,
  skills,
  experience,
  projects
) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.put(
      `${BASE_URL}/api/resume/${resumeId}`,
      { personalInfo, education, skills, experience, projects },
      {
        withCredentials: true,
        headers,
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const downloadResume = async (
  personalInfo,
  education,
  skills,
  experience,
  projects,
  templateId
) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(
      `${BASE_URL}/api/resume/download`,
      { personalInfo, education, skills, experience, projects, templateId },
      {
        withCredentials: true,
        headers,
      }
    );
    console.log(res);
    if (res.status == 200) {
      const { pdf, filename } = res.data; 
      console.log(pdf,filename)
      const link = document.createElement("a");
      link.href = `data:application/pdf;base64,${pdf}`; 
      link.setAttribute("download", filename); 
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
