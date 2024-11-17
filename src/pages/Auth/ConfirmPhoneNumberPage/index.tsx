import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../../components/FormInput";

interface nextStepVerification {
  phone: string;
  category: string;
}

const ConfirmValidation: React.FC = () => {
  const initialValues: nextStepVerification = {
    phone: "",
    category: "",
  };

  const validationSchema = Yup.object({
    phone: Yup.string().required("Phone number is required"),
    category: Yup.string().required("Category is required"),
  });

  const categories = ["Technology", "Retail", "Healthcare", "Education"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("next stepValue", values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Phone */}
            <FormInput
              name="phone"
              type="text"
              label="Phone"
              placeholder="+237 699 99 99 99"
              errors={errors.phone}
              touched={touched.phone}
            />

            {/* Category */}
            <FormInput
              name="category"
              label="Category"
              as="select"
              options={categories}
              errors={errors.category}
              touched={touched.category}
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-3 w-full py-3 px-4 bg-primary_Green text-white rounded-md font-medium hover:bg-green-700"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfirmValidation;
