import "./index.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthenticationContext";
import { fetchUserData } from "./config";

const App = () => {
  const location = useLocation();
  const { setIsAuthenticated } = useAuth();

  const getUserData = async () => {
    const userData = await fetchUserData();
    if (userData) {
      localStorage.setItem("user", userData?.displayName);
      localStorage.setItem("userPhoto", userData?.photo);
      localStorage.setItem("userEmail", userData?.email);
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const isResumeBuilder = location.pathname.startsWith("/resume-build");
  return (
    <div className="">
      <Navbar />
      <div className={`min-h-[100vh] ${isResumeBuilder ? "" : "px-32"}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
