import React, { useState } from "react";
import Header from "./Header";
import {
  Clock,
  Filter,
  Grid3x3,
  Grid3X3,
  List,
  Share2,
  Table,
} from "lucide-react";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

type TabButtonProps = {
  icon: React.ReactNode;
  name: string;
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

const TabButton = ({ name, icon, setActiveTab, activeTab }: TabButtonProps) => {
  const isActive = activeTab === name;
  return (
    <button
      onClick={() => setActiveTab(name)}
      className={`relative flex cursor-pointer items-center gap-2 px-1 py-2 ${
        isActive
          ? "text-blue-600 after:bg-blue-600 dark:text-white"
          : "text-neutral-500 dark:text-neutral-400"
      } after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white lg:px-4`}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  return (
    <div className="px-4 xl:px-6">
      {/* Modal */}
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header name="Product Design Development" />
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-2 pt-2 dark:border-stroke-dark md:items-center">
        <div className="flex flex-1 items-center gap-2 md:gap-4">
          <TabButton
            name="Board"
            icon={<Grid3X3 className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="List"
            icon={<List className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="Timeline"
            icon={<Clock className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="Table"
            icon={<Table className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <Filter className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300">
            <Share2 className="h-5 w-5" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Task"
              className="rounded-md border py-1 pl-10 pr-4 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
            />
            <Grid3x3 className="absolute left-3 top-2 h-4 w-4 text-gray-400 dark:text-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
