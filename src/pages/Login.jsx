import TextField from "../components/TextField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh]">
      <TextField />
      <TextField />
      <Button>Login</Button>
      <div>
        <span>No Account? <Link to='/signup'>Sign up now</Link></span>
      </div>
    </div>
  );
};

export default Login;
