import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

interface StepProps {
    nextStep: () => void;
}

const PersonalInfo: React.FC<StepProps> = ({nextStep}) => {
    const initialValues = {
        fullName: '',
        email: '',
        phone: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Nom complet requis'),
        email: Yup.string().email('Email invalide').required('Adresse e-mail requise'),
        phone: Yup.string().required('Numéro de téléphone requis'),
    });

    const onSubmit = (values: typeof initialValues) => {
        console.log('Step 1 Data:', values);
        nextStep();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations personnelles</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-gray-700 font-medium">
                                Full Name
                            </label>
                            <Field
                                name="fullName"
                                type="text"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                E-mail
                            </label>
                            <Field
                                name="email"
                                type="email"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium">
                                Phone Number
                            </label>
                            <Field
                                name="phone"
                                type="text"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1"/>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Next
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default PersonalInfo;

