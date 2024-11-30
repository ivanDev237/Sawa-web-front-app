import { Navigate } from "react-router-dom";
import { PATH_AUTH } from "../constants/paths";
import AuthLayout from "../Layout/AuthLayout";
import LoginPage from "../pages/Auth/LoginPage";
import SignupPage1 from "../pages/Auth/SignUpPage";

const authLinks = [
  {
    path: "/",
    element: <Navigate to={PATH_AUTH.LOGIN} replace />,
  },
  {
    path: PATH_AUTH.AUTH,
    element: <AuthLayout />,
    children: [
      {
        path: PATH_AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH_AUTH.REGISTER,
        element: <SignupPage1 />,
      },
    ],
  },
];

export default authLinks;
