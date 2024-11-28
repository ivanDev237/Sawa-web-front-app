import React, { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // To pass any content inside the button
  className?: string; // To pass additional styles if needed
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={`${type ? type : "button"}`}
      className={`flex px-4 py-1 text-sm text-white font-semibold dark:hover:bg-primary_Green  dark:hover:text-white rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
