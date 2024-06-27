import { cn } from "@/libs/utils";
import React from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded bg-red-600 text-white font-semibold hover-70 flex-center px-3 py-1",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
