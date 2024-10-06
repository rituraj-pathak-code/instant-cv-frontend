import TextField from "../components/TextField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const loginHandler = async () => {
      window.location.href = "http://localhost:8000/auth/google";
  };
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh]">
      <Button onClick={loginHandler}>Login with Google</Button>
    </div>
  );
};

export default Login;
