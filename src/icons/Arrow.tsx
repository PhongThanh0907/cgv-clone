import { cn } from "@/libs/utils";
import React from "react";

interface ArrowProps {
  onClick?: () => void;
  height?: number;
  width?: number;
  fill?: string;
  className?: string;
}
const Arrow: React.FC<ArrowProps> = ({
  onClick,
  height,
  width,
  fill,
  className,
}) => {
  return (
    <svg
      className={cn("", className)}
      onClick={onClick}
      width={width || 8}
      height={height || 15}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.70711 14.2071C7.31658 14.5976 6.68342 14.5976 6.29289 14.2071L0.292894 8.20711C-0.0976309 7.81658 -0.0976308 7.18342 0.292894 6.79289L6.29289 0.792893C6.68342 0.402368 7.31658 0.402368 7.70711 0.792893C8.09763 1.18342 8.09763 1.81658 7.70711 2.20711L2.41421 7.5L7.70711 12.7929C8.09763 13.1834 8.09763 13.8166 7.70711 14.2071Z"
        fill={fill || "#F9FAFB"}
      />
    </svg>
  );
};

export default Arrow;
