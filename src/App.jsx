import "./index.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useAuth } from "./contexts/AuthenticationContext";
import { fetchUserData } from "./config";
import Loader from "./components/Loader";
import { ResumeInfoProvider } from "./contexts/ResumeInfoContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const App = () => {
  const location = useLocation();
  const { setIsAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const userData = await fetchUserData();
    if (userData) {
      localStorage.setItem("user", userData?.displayName);
      localStorage.setItem("userPhoto", userData?.photo);
      localStorage.setItem("userEmail", userData?.email);
      localStorage.setItem("userId", userData?._id);
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const isResumeBuilder = location.pathname.startsWith("/resume-build");
  return (
    <div className="bg-gray-100">
      {loading ? (
        <Loader />
      ) : (
        <>
          {!isResumeBuilder && <Navbar />}
          <div
            className={`min-h-[100vh] max-w-[1600px] bg-white m-auto ${
              isResumeBuilder ? "" : "xl:px-40 lg:px-20 md:px-12 px-4"
            }`}
          >
             <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ResumeInfoProvider>
              <Outlet />
            </ResumeInfoProvider>
            </LocalizationProvider>
          </div>
          {!isResumeBuilder && <Footer />}
        </>
      )}
    </div>
  );
};

export default App;
