import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate()
  return (
    <div
      className={`flex justify-between items-center px-32 py-6 sticky top-0 transition-all duration-500 border-[1px] border-gray-100 
        ${scrollPosition > 200 ? "bg-[#CCD7E8]" : "bg-white"}`}
    >
      <div>
        <img src={logo} alt="" className="w-[180px]" />
      </div>
      <nav className="flex gap-8 items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "font-semibold text-[#8681FF]" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "font-semibold text-[#8681FF]" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to={"/templates"}
          className={({ isActive }) => (isActive ? "font-semibold text-[#8681FF]" : "")}
        >
          Templates
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "font-semibold text-[#8681FF]" : "")}
        >
          Contact
        </NavLink>
        <Button
          category="primary"
          onClick={()=>navigate('/login')}
          size="small"
        >
          Login
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
