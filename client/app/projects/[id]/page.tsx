"use client";
import BoardView from "@/components/Views/BoardView";
import ListView from "@/components/Views/ListView";
import ProjectHeader from "@/components/ProjectHeader";
import TimelineView from "@/components/Views/TimelineView";
import React, { useState } from "react";
import TableView from "@/components/Views/TableView";

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
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setShowCreateTaskModal={setShowCreateTaskModal} />
      )}
      {activeTab === "List" && (
        <ListView id={id} setShowCreateTaskModal={setShowCreateTaskModal} />
      )}
      {activeTab === "Timeline" && (
        <TimelineView id={id} setShowCreateTaskModal={setShowCreateTaskModal} />
      )}
      {activeTab === "Table" && (
        <TableView id={id} setShowCreateTaskModal={setShowCreateTaskModal} />
      )}
    </div>
  );
};

export default Projects;
