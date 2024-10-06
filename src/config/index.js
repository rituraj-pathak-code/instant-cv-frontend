import axios from "axios";

const BASE_URL = 'http://localhost:8000'

export const fetchUserData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/user` ,{ withCredentials: true });
        if(response.status == 200){
            return response.data
        } else {
            return false
        }
      } catch (err) {
        console.error(err);
        return false
      }
} 

export const fetchResume = async (personalInfo, education, skills, experience, projects) => {
    const headers = {
        "Content-Type": "application/json",
      };
      try{
        const res = await axios.post(
          `${BASE_URL}/api/create-resume`,
          { personalInfo, education, skills, experience, projects },
          { headers, responseType: 'blob', withCredentials: true  },
        );
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${personalInfo.firstName}_${personalInfo.lastName}_Resume.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      }catch(err){
        console.log(err)
      }
} 