import React, {
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { StepperContext } from "../contexts/stepperContext";
import * as Yup from "yup";
import { Form, Formik, FormikProps } from "formik";
import { images } from "../../constants/images";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SingUpFormValues {
  adresse: string;
  date: string;
  sexe: string;
}

const AutherData: React.FC = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const initialValues: SingUpFormValues = { adresse: "", date: "", sexe: "" };

  //   const handleChange = (e: MouseEvent) => {
  //     const { name, value } = e.target;
  //     setUserData({ ...userData, [name]: value });
  //   };

  const validationSchema = Yup.object({
    adresse: Yup.string()
      .required("l'adresse est obligatoire")
      .min(3, "minimum 3 caractere"),
    date: Yup.string().required("date de naissance obligatoire"),
    sexe: Yup.string().required("sexe obliger"),
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
  const [age, setAge] = useState("");
  const handleChanges = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
      }: FormikProps<SingUpFormValues>) => (
        <Form>
          <div className="mb-4 z-50">
            <label
              htmlFor="adresse"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse
            </label>
            <input
              type="text"
              name="adresse"
              id="adresse"
              placeholder="enter you name"
              value={values.adresse}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.adresse && touched.adresse && (
              <div className="text-red-500 text-xs mt-1">{errors.adresse}</div>
            )}
          </div>

          <div className="mb-4 z-50">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date Naissance
            </label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="enter born name"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.date && touched.date && (
              <div className="text-red-500 text-xs mt-1">{errors.date}</div>
            )}
          </div>

          <div className="mb-4 z-50">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Sexe"
                  onBlur={handleBlur}
                  onChange={handleChanges}
                >
                  <MenuItem value='femme'>Femme</MenuItem>
                  <MenuItem value='HOMME'>HOMME</MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}

                </Select>
                {errors.sexe && touched.sexe && (
              <div className="text-red-500 text-xs mt-1">{errors.sexe}</div>
            )}
              </FormControl>
            </Box>
           
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default AutherData;

// export default function AutherData() {
