import { Form, Formik, FormikProps } from "formik";
import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { images } from "../../constants/images";
import { PATH_AUTH, PATH_SUPER_ADMIN } from "../../constants/paths";
import { NavLink } from "react-router-dom";

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
            <NavLink to={PATH_SUPER_ADMIN.HOME} >
            Login
            </NavLink>
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

// import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import FormInput from "../../components/FormInput";

// interface LoginFormValues {
//   email: string;
//   password: string;
// }

// const LoginForm: React.FC = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const initialValues: LoginFormValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = (values: LoginFormValues) => {
//     setIsSubmitting(true);
//     console.log("Login values:", values);
//      Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       alert("Logged in successfully!");
//     }, 2000);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ errors, touched }) => (
//         <Form className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
//             Login
//           </h2>

//           {/* Email */}
//           <FormInput
//             name="email"
//             type="email"
//             label="Email"
//             placeholder="example@domain.com"
//             errors={errors.email}
//             touched={touched.email}
//           />

//           {/* Password */}
//           <FormInput
//             name="password"
//             type="password"
//             label="Password"
//             placeholder="●●●●●●●"
//             errors={errors.password}
//             touched={touched.password}
//           />

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full py-3 px-4 rounded-md font-medium text-white transition duration-300 ${
//               isSubmitting
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-primary_Green hover:bg-green-700"
//             }`}
//           >
//             {isSubmitting ? "Loading..." : "Login"}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default LoginForm;

//  import { Form, Formik } from "formik";
//  import React, { useState } from "react";
//  import * as Yup from "yup";
//  import FormInput from "../../components/FormInput";

//  interface LoginFormValues {
//    email: string;
//    password: string;
//  }

//  const LoginForm: React.FC = () => {
//    const [isSubmitting, setIsSubmitting] = useState(false);

//    const initialValues: LoginFormValues = {
//      email: "",
//      password: "",
//    };

//    const validationSchema = Yup.object({
//      email: Yup.string()
//        .email("Invalid email format")
//        .required("Email is required"),
//      password: Yup.string().required("Password is required"),
//    });

//    const handleSubmit = (values: LoginFormValues) => {
//      setIsSubmitting(true);
//      console.log("Login values:", values);
//       Simulate API call
//      setTimeout(() => {
//        setIsSubmitting(false);
//        alert("Logged in successfully!");
//      }, 2000);
//    };

//    return (
//      <Formik
//        initialValues={initialValues}
//        validationSchema={validationSchema}
//        onSubmit={handleSubmit}
//      >
//        {({ errors, touched }) => (
//          <Form className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//            <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
//              Login
//            </h2>

//            {/* Email */}
//            <FormInput
//              name="email"
//              type="email"
//              label="Email"
//              placeholder="example@domain.com"
//              errors={errors.email}
//              touched={touched.email}
//            />

//            {/* Password */}
//            <FormInput
//              name="password"
//              type="password"
//              label="Password"
//              placeholder="●●●●●●●"
//              errors={errors.password}
//              touched={touched.password}
//            />

//            {/* Submit Button */}
//            <button
//              type="submit"
//              disabled={isSubmitting}
//              className={`w-full py-3 px-4 rounded-md font-medium text-white transition duration-300 ${
//                isSubmitting
//                  ? "bg-gray-400 cursor-not-allowed"
//                  : "bg-primary_Green hover:bg-green-700"
//              }`}
//            >
//              {isSubmitting ? "Loading..." : "Login"}
//            </button>
//          </Form>
//        )}
//      </Formik>
//    );
//  };

//  export default LoginForm;
