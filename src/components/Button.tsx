import { cn } from "@/libs/utils";
import React, { CSSProperties } from "react";
import MoonLoader from "react-spinners/ClipLoader";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  type,
  isLoading,
  isDisabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={cn(
        "w-full relative flex-center gap-2 py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
        className
      )}
    >
      <div className="flex-center">
        <MoonLoader size={20} color="#fff" loading={isLoading} />
      </div>
      {children}
    </button>
  );
};

export default Button;
