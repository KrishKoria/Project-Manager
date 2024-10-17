"use client";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const sidebarClass = `fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;
  return (
    <div className={sidebarClass}>
      <div className="flex h-full w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-14 w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Project List
          </div>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <div className="">
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              My Team
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon
                className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400"
                size={16}
              />
              <p className="text-xs text-gray-500">private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
