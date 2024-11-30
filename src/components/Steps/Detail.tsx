import React, { MouseEvent, useContext, useEffect, useRef } from "react";
import { StepperContext } from "../contexts/stepperContext";
import * as Yup from "yup";
import { Form, Formik, FormikProps } from "formik";
import Select from "react-select";

import { images } from "../../constants/images";

interface SingUpFormValues {
  codepostal: string;
  telephone: string;
  pays: string;
}
interface CountryOption {
  value: string;
  label: string;
  flag: string;
}

const Detail: React.FC = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const initialValues: SingUpFormValues = {
    codepostal: "",
    telephone: "",
    pays: "",
  };

  //   const handleChange = (e: MouseEvent) => {
  //     const { name, value } = e.target;
  //     setUserData({ ...userData, [name]: value });
  //   };

  const validationSchema = Yup.object({
    codepostal: Yup.string()
      .required("code postal obligatoire")
      .min(3, "minimum 3 caractere"),
    telephone: Yup.number().required("le numeros est obligatoire"),
    pays: Yup.string().required("pays obliger"),
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

  const countries = [
    { value: "af", label: "Afghanistan", flag: "https://flagcdn.com/af.svg" },
    { value: "al", label: "Albanie", flag: "https://flagcdn.com/al.svg" },
    { value: "dz", label: "Algérie", flag: "https://flagcdn.com/dz.svg" },
    { value: "ad", label: "Andorre", flag: "https://flagcdn.com/ad.svg" },
    { value: "ao", label: "Angola", flag: "https://flagcdn.com/ao.svg" },
    { value: "ag", label: "Antigua-et-Barbuda", flag: "https://flagcdn.com/ag.svg" },
    { value: "ar", label: "Argentine", flag: "https://flagcdn.com/ar.svg" },
    { value: "am", label: "Arménie", flag: "https://flagcdn.com/am.svg" },
    { value: "au", label: "Australie", flag: "https://flagcdn.com/au.svg" },
    { value: "at", label: "Autriche", flag: "https://flagcdn.com/at.svg" },
    { value: "az", label: "Azerbaïdjan", flag: "https://flagcdn.com/az.svg" },
    { value: "bs", label: "Bahamas", flag: "https://flagcdn.com/bs.svg" },
    { value: "bh", label: "Bahreïn", flag: "https://flagcdn.com/bh.svg" },
    { value: "bd", label: "Bangladesh", flag: "https://flagcdn.com/bd.svg" },
    { value: "bb", label: "Barbade", flag: "https://flagcdn.com/bb.svg" },
    { value: "be", label: "Belgique", flag: "https://flagcdn.com/be.svg" },
    { value: "bz", label: "Belize", flag: "https://flagcdn.com/bz.svg" },
    { value: "bj", label: "Bénin", flag: "https://flagcdn.com/bj.svg" },
    { value: "bt", label: "Bhoutan", flag: "https://flagcdn.com/bt.svg" },
    { value: "bo", label: "Bolivie", flag: "https://flagcdn.com/bo.svg" },
    { value: "ba", label: "Bosnie-Herzégovine", flag: "https://flagcdn.com/ba.svg" },
    { value: "bw", label: "Botswana", flag: "https://flagcdn.com/bw.svg" },
    { value: "br", label: "Brésil", flag: "https://flagcdn.com/br.svg" },
    { value: "bn", label: "Brunei", flag: "https://flagcdn.com/bn.svg" },
    { value: "bg", label: "Bulgarie", flag: "https://flagcdn.com/bg.svg" },
    { value: "bf", label: "Burkina Faso", flag: "https://flagcdn.com/bf.svg" },
    { value: "bi", label: "Burundi", flag: "https://flagcdn.com/bi.svg" },
    { value: "cv", label: "Cabo Verde", flag: "https://flagcdn.com/cv.svg" },
    { value: "kh", label: "Cambodge", flag: "https://flagcdn.com/kh.svg" },
    { value: "cm", label: "Cameroun", flag: "https://flagcdn.com/cm.svg" },
    { value: "ca", label: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { value: "cf", label: "Centrafrique", flag: "https://flagcdn.com/cf.svg" },
    { value: "td", label: "Tchad", flag: "https://flagcdn.com/td.svg" },
    { value: "cl", label: "Chili", flag: "https://flagcdn.com/cl.svg" },
    { value: "cn", label: "Chine", flag: "https://flagcdn.com/cn.svg" },
    { value: "co", label: "Colombie", flag: "https://flagcdn.com/co.svg" },
    { value: "km", label: "Comores", flag: "https://flagcdn.com/km.svg" },
    { value: "cg", label: "Congo (République du)", flag: "https://flagcdn.com/cg.svg" },
    { value: "cd", label: "Congo (République Démocratique du)", flag: "https://flagcdn.com/cd.svg" },
    { value: "cr", label: "Costa Rica", flag: "https://flagcdn.com/cr.svg" },
    { value: "hr", label: "Croatie", flag: "https://flagcdn.com/hr.svg" },
    { value: "cu", label: "Cuba", flag: "https://flagcdn.com/cu.svg" },
    { value: "cy", label: "Chypre", flag: "https://flagcdn.com/cy.svg" },
    { value: "cz", label: "République tchèque", flag: "https://flagcdn.com/cz.svg" },
    { value: "dk", label: "Danemark", flag: "https://flagcdn.com/dk.svg" },
    { value: "dj", label: "Djibouti", flag: "https://flagcdn.com/dj.svg" },
    { value: "dm", label: "Dominique", flag: "https://flagcdn.com/dm.svg" },
    { value: "ec", label: "Équateur", flag: "https://flagcdn.com/ec.svg" },
    { value: "eg", label: "Égypte", flag: "https://flagcdn.com/eg.svg" },
    { value: "sv", label: "El Salvador", flag: "https://flagcdn.com/sv.svg" },
    { value: 'ae', label:'Émirats Arabes Unis', flag:'https://flagcdn.com/ae.svg' },
    { value:'es', label:'Espagne', flag:'https://flagcdn.com/es.svg' },
    { value:'ee', label:'Estonie', flag:'https://flagcdn.com/ee.svg' },
    { value:'us', label:'États-Unis', flag:'https://flagcdn.com/us.svg' },
    { value:'et', label:'Éthiopie', flag:'https://flagcdn.com/et.svg' }
  ]

  const handleChanges = (selectedOption: CountryOption | null) => {
    console.log("Pays sélectionné:", selectedOption);
  };

  const formatOptionLabel = ({ label, flag }: CountryOption) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={flag}
        alt={label}
        style={{ width: 20, height: 15, marginRight: 10 }}
      />
      <span>{label}</span>
    </div>
  );

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
              Code postale
            </label>
            <input
              type="text"
              name="codepostal"
              id="codepostal"
              placeholder="entrer votre code postal"
              value={values.codepostal}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.codepostal && touched.codepostal && (
              <div className="text-red-500 text-xs mt-1">
                {errors.codepostal}
              </div>
            )}
          </div>

          <div className="mb-4 z-50">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Telephone
            </label>
            <input
              type="number"
              name="telephone"
              id="telephone"
              placeholder="entrer votre numeros de telephone"
              value={values.telephone}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.telephone && touched.telephone && (
              <div className="text-red-500 text-xs mt-1">
                {errors.telephone}
              </div>
            )}
          </div>

          {/* <div className="mb-4 z-50">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Pays
            </label>
            <input
              type="text"
              name="pays"
              id="pays"
              placeholder="selectionner votre pays"
              value={values.pays}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-primary_Green focus:border-1 z-50"
            />
            {errors.pays && touched.pays && (
              <div className="text-red-500 text-xs mt-1">{errors.pays}</div>
            )}
          </div> */}

          <div className="mb-4 z-50">
            <Select
              options={countries}
              onChange={handleChanges}
              placeholder="Sélectionnez un pays"
              formatOptionLabel={formatOptionLabel}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Detail;
