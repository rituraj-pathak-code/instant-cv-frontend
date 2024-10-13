import GoogleButton from "react-google-button";

const Login = () => {
  const loginHandler = async () => {
    window.location.href = "http://localhost:8000/auth/google";
  };
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh]">
      <GoogleButton onClick={loginHandler} />{" "}
    </div>
  );
};

export default Login;
