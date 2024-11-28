import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormInput from "../../../components/FormInput";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignupPage1: React.FC = () => {
  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("SignUp values:", values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
              Sign Up
            </h2>

            {/* Name */}
            <FormInput
              name="name"
              label="Name"
              placeholder="John Doe"
              errors={errors.name}
              touched={touched.name}
            />

            {/* Email */}
            <FormInput
              name="email"
              type="email"
              label="Email"
              placeholder="admin@demo.com"
              errors={errors.email}
              touched={touched.email}
            />

            {/* Password */}
            <FormInput
              name="password"
              type="password"
              label="Password"
              placeholder="●●●●●●●"
              errors={errors.password}
              touched={touched.password}
              className={"relative"}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary-light text-white rounded-md font-medium hover:bg-green-700 mt-3"
            >
              next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPage1;
