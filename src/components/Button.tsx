import { cn } from "@/libs/utils";
import React from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "w-full py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
