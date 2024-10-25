import { useGetTasksQuery, useUpdateTaskStatusMutation } from "@/lib/api";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
type BoardProps = {
  id: string;
  setShowCreateTaskModal: (isOpen: boolean) => void;
};

const status = ["To Do", "Work In Progress", "Under Review", "Completed"];

const BoardView = ({ id, setShowCreateTaskModal }: BoardProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });
  const [updateTaskStatus] = useUpdateTaskStatusMutation();
  const moveTask = (taskId: number, toStatus: string) => {
    updateTaskStatus({ taskId, status: toStatus });
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Occured While fetching Tasks</div>;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
        {status.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks || []}
            moveTask={moveTask}
            setShowCreateTaskModal={setShowCreateTaskModal}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default BoardView;
