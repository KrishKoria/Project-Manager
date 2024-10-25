import { useGetTasksQuery } from "@/lib/api";
import { useAppSelector } from "@/lib/redux";
import React from "react";

type Props = {
  id: string;
  setShowCreateTaskModal: (isOpen: boolean) => void;
};

const TableView = ({ id, setShowCreateTaskModal }: Props) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });
  if (isLoading) return <div>Loading...</div>;
  if (error || !tasks) return <div>An error occurred while fetching tasks</div>;
  return <div>TableView</div>;
};

export default TableView;
