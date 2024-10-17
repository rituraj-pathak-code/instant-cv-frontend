import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/user`, {
      withCredentials: true,
    });
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
  projects
) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(
      `${BASE_URL}/api/resume`,
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
  projects
) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(
      `${BASE_URL}/api/resume/download`,
      { personalInfo, education, skills, experience, projects },
      {
        withCredentials: true,
        headers,
        responseType: "blob",
      }
    );
    console.log(res)
    if (res.status == 200) {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${personalInfo.firstName}_${personalInfo.lastName}_Resume.pdf`
      );
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
