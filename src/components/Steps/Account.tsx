import React, { MouseEvent, useContext, useEffect, useRef } from "react";
import { StepperContext } from "../contexts/stepperContext";
import * as Yup from "yup";
import { Form, Formik, FormikProps } from "formik";
import { images } from "../../constants/images";



interface SingUpFormValues {
  nom: string;
  prenom: string;
  email: string;
}


// export default function Account() {
const Account: React.FC = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const initialValues: SingUpFormValues = {nom:"", prenom:"", email: ""};

//   const handleChange = (e: MouseEvent) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

const validationSchema = Yup.object({
    nom:Yup.string().required("un nom est obligatoire").min(3,"minimum 3 caractere"),
    prenom:Yup.string().required("un prenom est obligatoire").min(3,"minimun 3 caractere"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "invalid email"
      )
      .required("Email is required"),
   
  });

  const handleSubmit = (values: SingUpFormValues) => {
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

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
{
    ({
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        isSubmitting,
    } :FormikProps<SingUpFormValues> ) =>
    (
        <Form >

        {/* <div className="text-center mb-6 z-40 relative select-none">
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
           */}
          <div className="mb-4 z-50">
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder="enter you name"
              value={values.nom}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.nom && touched.nom && (
              <div className="text-red-500 text-xs mt-1">{errors.nom}</div>
            )}
          </div>

          <div className="mb-4 z-50">
            <label
              htmlFor="prenom"
              className="block text-sm font-medium text-gray-700"
            >
              Prenom
            </label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              placeholder="enter you name"
              value={values.prenom}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.prenom && touched.prenom && (
              <div className="text-red-500 text-xs mt-1">{errors.prenom}</div>
            )}
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

        </Form>
    )
}
    {/* <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          username
        </div>
        <div className="bg-white my-2 p-1  flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="username"
            className="p-1 py-2 appearance-none outline-none  w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          password
        </div>
        <div className="bg-white my-2 p-1  flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="password"
            type="password"
            className="p-1 py-2 appearance-none outline-none  w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          password
        </div>
        <div className="bg-white my-2 p-1  flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="password"
            type="password"
            className="p-1 py-2 appearance-none outline-none  w-full text-gray-800"
          />
        </div>
      </div>

    </div> */}

     </Formik>
  );
};
export default Account;
