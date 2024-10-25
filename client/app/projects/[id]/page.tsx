"use client";
import ProjectHeader from "@/components/ProjectHeader";
import React, { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Projects = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Boards");
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  return (
    <div className="">
      {/* Modal */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />\
      {/* {activeTab === "Boards" && <Boards projectId={id} />} */}
    </div>
  );
};

export default Projects;
