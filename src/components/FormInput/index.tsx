import {Field} from "formik";
import React from "react";

interface FormInputProps {
    name: string;
    type?: "text" | "password" | "email" | undefined;
    label: string;
    placeholder?: string;
    errors?: string;
    touched?: boolean;
    isRequired?: boolean;
    className?: string;
    as?: "input" | "select"; // Permet de gérer des champs normaux ou des menus déroulants
    options?: string[]; // Pour les listes déroulantes (categories)
}

const FormInput: React.FC<FormInputProps> = ({
                                                 name,
                                                 type = "text",
                                                 label,
                                                 placeholder,
                                                 errors,
                                                 touched,
                                                 isRequired = false,
                                                 as = "input",
                                                 options = [],
                                             }) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            {as === "select" ? (
                <Field
                    as="select"
                    name={name}
                    id={name}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-1 focus:border-primary_Green"
                >
                    <option value="" label="Select an option"/>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Field>
            ) : (
                <Field
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-1 focus:border-primary_Green"
                />
            )}
            {errors && touched && (
                <div className="text-red-500 text-xs mt-1">{errors}</div>
            )}
        </div>
    );
};

export default FormInput;
