import logo from "../assets/logo.png";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { Form, Formik } from "formik";
import { login } from "../config";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthenticationContext";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const handleSubmit = async (formik) => {
    setLoading(true);
    const { username, password } = formik.values;
    if (!username || !password) {
      setLoading(false);
      return toast.error("Username & Password is required");
    }
    const res = await login(username, password);
    if (res.status == 200) {
      setLoading(false);
      localStorage.setItem("user", res?.data?.name);
      localStorage.setItem("username", res?.data?.username);
      localStorage.setItem("userId", res?.data?._id);
      setIsAuthenticated(true);
      navigate("/");
    } else {
      if (res.response.data.message == "Invalid Credentials") {
        setLoading(false);
        toast.error("Invalid Credentials");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh] bg-gray-100">
      <div className="shadow border rounded w-[350px] flex flex-col justify-center  gap-4 py-8 px-4 bg-white">
        <img src={logo} alt="logo" className="w-[150px] m-auto" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl">Welcome to </h3>
          <p className="text-sm text-gray-500">
            Create your best resume today!
          </p>
        </div>
        <Formik
          initialValues={{ username: "", password: "" }}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div className="m-auto w-full flex flex-col gap-4">
                <div>
                  <TextField
                    name="username"
                    label="Username"
                    placeholder="Enter Username"
                    onChange={formik?.handleChange}
                    value={formik.values.username}
                  />
                </div>
                <div>
                  <TextField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter Password"
                    onChange={formik?.handleChange}
                    value={formik.values.password}
                  />
                </div>
                <div className="m-auto">
                  <Button
                    category={loading ? "disabled" : "primary"}
                    onClick={() => handleSubmit(formik)}
                  >
                    {loading ? "Please wait..." : "Sign in now"}
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex items-center justify-center gap-[3px] text-sm">
          <p>No account?</p>
          <Link className="text-blue-600 underline" to={"/signup"}>
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
