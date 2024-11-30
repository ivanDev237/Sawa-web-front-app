import { Form, Formik, FormikProps } from "formik";
import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { images } from "../../constants/images";
import {
  PATH_AUTH,
  PATH_PARTNERS,
  PATH_SUPER_ADMIN,
} from "../../constants/paths";
import usersRole from "../../constants/UsersRole";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = { email: "", password: "" };

  // Schéma de validation avec Yup

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "invalid email"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: LoginFormValues) => {
    console.log("Form values:", values);
    //Logique de soumission
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const inputPassRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const id = setTimeout(() => {
      inputRef.current?.focus();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        isSubmitting,
      }: FormikProps<LoginFormValues>) => (
        <Form className="w-full max-w-md mx-auto p-6 bg-white  rounded-lg shadow-md  overflow-hidden">
          <div className="text-center mb-6 z-40 relative select-none">
            <img
              src={images.sawa_logo}
              alt="SAWA Logo"
              className="mx-auto w-1/2 object-cover h-28"
            />
            <div className=" absolute w-full left-0 -top-28">
              <img
                src={images.Polymer}
                alt="polymer background"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-4 z-50">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="admin@demo.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-xs mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="●●●●●●●"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green relative"
                ref={inputPassRef}
              />
              {inputPassRef.current?.value && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className=" inset-y-0 right-0 flex items-center pr-3 absolute"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-5 text-gray-500" /> //Icône de l'œil barré
                  ) : (
                    <Eye className="h-4 w-5 text-gray-500" /> //Icône de l'œil
                  )}
                </button>
              )}
            </div>
            {errors.password && touched.password && (
              <div className="text-red-500 text-xs mt-1">{errors.password}</div>
            )}
          </div>

          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-primary_Green hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-4 bg-primary-light text-white font-medium rounded-md hover:bg-green-700 focus:outline-none  duration-300 cursor-pointer"
          >
            <Link
              to={
                usersRole.roleAdmin ? PATH_SUPER_ADMIN.HOME : PATH_PARTNERS.HOME
              }
            >
              Login
            </Link>
          </button>

          <div className="text-center my-6 text-gray-500">Or</div>

          <div className="text-center">
            <p className="text-sm text-gray-700">
              Don’t have an account?{" "}
              <a
                href={PATH_AUTH.REGISTER}
                className="text-primary-light hover:underline"
              >
                register as an owner
              </a>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
