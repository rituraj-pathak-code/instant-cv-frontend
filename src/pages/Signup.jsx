import logo from "../assets/logo.png";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { Form, Formik } from "formik";
import { login, signup } from "../config";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formik) => {
    setLoading(true);
    const { name, username, password } = formik.values;
    if (!name || !username || !password) {
      setLoading(false);
      return toast.error("Please fill out all the details");
    }
    if (name.length < 5) {
      setLoading(false);
      return toast.error("Name must be at least 3 character");
    } else if (username.length < 5) {
      setLoading(false);
      return toast.error("Username must be at least 5 character");
    } else if (password.length < 5) {
      setLoading(false);
      return toast.error("Password must be at least 5 characters long");
    }
    const res = await signup(name, username, password);
    console.log(res);
    if (res.status == 201) {
      setLoading(false);
      toast.success("Account created successfully. Please login!");
      navigate("/login");
    } else {
      if (res.response.data.code === 11000) {
        setLoading(false);
        return toast.error("Username already exists");
      }
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh] bg-gray-100">
      <div className="shadow border rounded w-[350px] flex flex-col justify-center  gap-4 py-8 px-4 bg-white">
        <img src={logo} alt="logo" className="w-[150px] m-auto" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl">CREATE NEW ACCOUNT!</h3>
          <p className="text-sm text-gray-500">
            Create your best resume today!
          </p>
        </div>
        <Formik
          initialValues={{ name: "", username: "", password: "" }}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div className="m-auto w-full flex flex-col gap-2">
                <div>
                  <TextField
                    name="name"
                    label="Full Name"
                    placeholder="Enter Full Name"
                    onChange={formik?.handleChange}
                    value={formik.values.name}
                  />
                </div>
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
                <div className="m-auto mt-4">
                  <Button
                    category={loading ? "disabled" : "primary"}
                    onClick={() => handleSubmit(formik)}
                  >
                    {loading ? "Please wait..." : "Create an account"}
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex items-center justify-center gap-[3px] text-sm">
          <p>Already have an account?</p>
          <Link className="text-blue-600 underline" to={"/login"}>
            Login now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
