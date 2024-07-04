import { IconType } from "@/app/types/iconType";
import { cn } from "@/libs/utils";
import React from "react";

const Caret: React.FC<IconType> = ({
  height,
  width,
  fill,
  onClick,
  className,
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn("", className)}
      width={height || 30}
      height={width || 30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill={fill || "#F9FAFB"}
        d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
      />
    </svg>
  );
};

export default Caret;
