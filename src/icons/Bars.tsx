import { cn } from "@/libs/utils";
import React from "react";

interface BarsProps {
  onClick?: () => void;
  height?: number;
  width?: number;
  fill?: string;
  className?: string;
}

const Bars: React.FC<BarsProps> = ({
  onClick,
  height,
  width,
  className,
  fill,
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
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
    </svg>
  );
};

export default Bars;
