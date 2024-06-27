import { cn } from "@/libs/utils";
import React from "react";

interface TitleSectionProps {
  children?: React.ReactNode;
  className?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-[60px] relative w-full flex items-center gap-4",
        className
      )}
    >
      <div className="h-full flex-1 flex-center flex-col gap-1">
        <div className="w-full h-[1px] bg-[#222]" />
        <div className="w-full h-[1px] bg-[#222]" />
      </div>
      {children}
      <div className="h-full flex-1 flex-center flex-col gap-1">
        <div className="w-full h-[1px] bg-[#222]" />
        <div className="w-full h-[1px] bg-[#222]" />
      </div>
    </div>
  );
};

export default TitleSection;
