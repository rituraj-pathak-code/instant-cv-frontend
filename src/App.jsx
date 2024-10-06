import "./index.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useEffect } from "react";
import axios from "axios";
import { useAuth } from "./contexts/AuthenticationContext";

const App = () => {
  const location = useLocation();
  const {setIsAuthenticated} = useAuth()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user',{ withCredentials: true }); 
        if(response.status == 200){
          localStorage.setItem('user',response.data.displayName)
          localStorage.setItem('userPhoto',response.data.photo)
          localStorage.setItem('userEmail',response.data.email)
          setIsAuthenticated(true)
        }
        console.log(response)
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const isResumeBuilder = location.pathname.startsWith("/resume-build");
  return (
    <div className="">
      <Navbar />
      <div className={`min-h-[100vh] ${isResumeBuilder ? '' : 'px-32'}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
