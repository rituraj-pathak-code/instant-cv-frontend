import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import useScrollPosition from "../hooks/useScrollPosition";
import { useAuth } from "../contexts/AuthenticationContext";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl,setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const userName = localStorage.getItem("user");
  const userPhoto = localStorage.getItem("userPhoto");

  const logoutHandler = async () => {
    setAnchorEl(null)
    window.location.href = "http://localhost:8000/auth/google/logout";
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };
  return (
    <div
      className={`flex justify-between items-center px-32 py-4 sticky top-0 transition-all bg-white duration-300 border-[1px] border-gray-100 
        ${scrollPosition > 250 && "translate-y-[-100%]"}`}
    >
      <div>
        <img src={logo} alt="" className="w-[180px]" />
      </div>
      <nav className="flex gap-8 items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#8681FF]" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/templates"}
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#8681FF]" : ""
          }
        >
          Templates
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#8681FF]" : ""
          }
        >
          Contact
        </NavLink>
        {isAuthenticated ? (
          <>
            <Avatar
              alt={userName}
              src={userPhoto}
              sx={{ width: 34, height: 34 }}
              aria-controls={open ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={(event)=> setAnchorEl(event.currentTarget)}
              style={{cursor:'pointer'}}
            />

            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={()=> setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "avatar-menu",
              }}
            >
              <MenuItem onClick={()=> setAnchorEl(null)}>Profile</MenuItem>
              <MenuItem onClick={()=> setAnchorEl(null)}>My Resume</MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            category="primary"
            onClick={() => navigate("/login")}
            size="small"
          >
            Login
          </Button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
