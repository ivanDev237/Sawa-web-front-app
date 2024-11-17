import { PropsWithChildren } from "react";

interface Button {
  className?: string;
  onClick?: () => void;
}

const BtnAct: React.FC<PropsWithChildren<Button>> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={
        className
          ? className
          : "bg-blue_BgTheme text-white px-4 py-3 rounded-md hover:bg-blue-600 duration-300"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default BtnAct;
