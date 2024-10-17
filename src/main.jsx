import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Templates from "./pages/Templates.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Builder from "./pages/Builder.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthenticationProvider } from "./contexts/AuthenticationContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import MyResume from "./pages/MyResume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/myresume",
        element: <MyResume />,
      },
      {
        path: "/resume-build/:id",
        element: <ProtectedRoute element={<Builder />} />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationProvider>
        <RouterProvider router={router} />
    </AuthenticationProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
