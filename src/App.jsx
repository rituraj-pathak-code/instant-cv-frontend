import "./index.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  // Check if the current route starts with '/resume-build'
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
