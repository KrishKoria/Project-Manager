import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: `Error Retrieving Projects : ${error.message}` });
  }
};
export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const newProjects = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    res.status(201).json(newProjects);
  } catch (error: any) {
    res.status(500).json({ error: `Error Creating Project: ${error.message}` });
  }
};
