import GoogleButton from "react-google-button";
import TextField from "../components/TextField"
import Button from "../components/Button"
import logo from "../assets/logo.png"

const Login = () => {
  const loginHandler = async () => {
    window.location.href = "http://localhost:8000/auth/google";
  };
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh]">
      <div className="shadow border rounded w-[350px] flex flex-col justify-center  gap-4 py-8 px-4">
        <img src={logo} alt="logo" className="w-[150px] m-auto" />
        <div className="flex flex-col items-center">
        <h3 className="font-bold text-xl">Sign in</h3>
        <p className="text-sm text-gray-500">Create your best resume today!</p>
        </div>
        {/* <form className="flex flex-col gap-2">
          <TextField placeholder={"Enter your email id"} type={"email"} name={"email"}/>
          <TextField placeholder={"Enter your password"} type={"password"} name={"password"}/>
          <div className="flex justify-center mt-2">
            <Button category="info" width={"100%"} >Sign in</Button>
          </div>
        </form> */}
        <div className="m-auto">
        <GoogleButton onClick={loginHandler} />{" "}
        </div>
        <p className="text-center text-sm text-gray-500">Easy Sign in with google.</p>

      </div>
     
    </div>
  );
};

export default Login;
