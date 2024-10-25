import React, { useState } from "react";
import Header from "./Header";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  return (
    <div className="px-4 xl:px-6">
      {/* Modal */}
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header name="Product Design Development" />
      </div>
    </div>
  );
};

export default ProjectHeader;
