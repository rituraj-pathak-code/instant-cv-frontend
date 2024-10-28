import "./index.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useAuth } from "./contexts/AuthenticationContext";
import Loader from "./components/Loader";
import { ResumeInfoProvider } from "./contexts/ResumeInfoContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { fetchUserData } from "./config";

const App = () => {
  const location = useLocation();
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate('/')
  const [loading, setLoading] = useState(true);
  const _id = localStorage.getItem('userId')

  const getUserData = async () => {
    const userData = await fetchUserData(_id);
    if (userData) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
      navigate('/login')
    }
  };

  useEffect(() => {
    if(_id){
      getUserData();
    }
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
