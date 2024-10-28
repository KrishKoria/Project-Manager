import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.query;
    const projectTasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.json(projectTasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: `Error Retrieving Tasks : ${error.message}` });
  }
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(500).json({ error: `Error Creating Task: ${error.message}` });
  }
};

export const updateTaskStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status,
      },
    });
    res.json(updatedTask);
  } catch (error: any) {
    res.status(500).json({ error: `Error Updating Task : ${error.message}` });
  }
};

export const getTasksByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    const userTasks = await prisma.task.findMany({
      where: {
        OR: [
          {
            authorUserId: Number(userId),
          },
          {
            assignedUserId: Number(userId),
          },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.json(userTasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: `Error Retrieving User Tasks : ${error.message}` });
  }
};
