type InputType = {
  type: "email" | "password" | "text";
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
  togglePasswordVisibility?: () => void;
  className?: string;
};

const Input: React.FC<InputType> = (props) => {
  const { type, name, id, placeholder, value, onChange, onBlur, className } =
    props;

  return (
    <input
      type={type}
      className={
        className
          ? className
          : "select-none mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none outline-offset-0 focus:border-green-500"
      }
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    ></input>
  );
};

export default Input;
