import Arrow from "@/icons/Arrow";
import Home from "@/icons/Home";
import Link from "next/link";
import React from "react";

interface BreadcrumbsProps {
  currentPage: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage }) => {
  return (
    <div className="bg-[#f1f0e5] py-1.5 border-b border-gray-300">
      <nav aria-label="">
        <ol className="flex default-screen items-center gap-4">
          <li className="">
            <Link href="/">
              <Home className="hover-70" fill="#000" height={20} width={20} />
            </Link>
          </li>
          <span className="relative top-0.5">
            <Arrow
              className="rotate-[180deg]"
              fill="#cacac0"
              height={14}
              width={14}
            />
          </span>
          <li className="font-bold underline text-gray-700" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
