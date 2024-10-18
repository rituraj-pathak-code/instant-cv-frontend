import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import useScrollPosition from "../hooks/useScrollPosition";
import { useAuth } from "../contexts/AuthenticationContext";
import Avatar from "@mui/material/Avatar";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ProfileDialog from "./ProfileDialog";

const Navbar = () => {
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const userName = localStorage.getItem("user");
  const userPhoto = localStorage.getItem("userPhoto");

  const logoutHandler = async () => {
    setAnchorEl(null);
    window.location.href = "http://localhost:8000/auth/google/logout";
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };
  const myResumeHandler = () => {
    setAnchorEl(null);
    navigate("/myresume");
  };
  const profileDialogHandler = () => {
    setAnchorEl(null);
    setIsProfileDialogOpen(true);
  };

  const templatesHandler = () => {
    setAnchorEl(null);
    navigate("/templates");
  };
  return (
    <div
      className={`flex justify-between items-center xl:px-40 lg:px-20 md:px-12 px-4 py-4 sticky top-0 transition-all bg-white duration-300 border-[1px] border-gray-100 
        ${scrollPosition > 250 && "translate-y-[-100%]"}`}
    >
      <Link to={"/"}>
        <img src={logo} alt="" className="w-[180px]" />
      </Link>
      <div className="flex items-center gap-8">
        <nav className="gap-8 items-center hidden sm:flex">
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
          {/* <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#8681FF]" : ""
            }
          >
            Contact
          </NavLink> */}
        </nav>
        {isAuthenticated ? (
          <>
            <Avatar
              alt={userName}
              src={userPhoto}
              sx={{ width: 34, height: 34 }}
              aria-controls={open ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(event) => setAnchorEl(event.currentTarget)}
              style={{ cursor: "pointer" }}
            />
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "avatar-menu",
              }}
              disableScrollLock={true}
            >
              <MenuItem onClick={profileDialogHandler}>Profile</MenuItem>
              <div className="sm:hidden">
                <MenuItem onClick={templatesHandler} className="sm:hidden">
                  Templates
                </MenuItem>
              </div>
              <MenuItem onClick={myResumeHandler}>My Resume</MenuItem>
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
      </div>
      <ProfileDialog
        isOpen={isProfileDialogOpen}
        setIsOpen={setIsProfileDialogOpen}
      />
    </div>
  );
};

export default Navbar;
