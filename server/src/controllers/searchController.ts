import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const search = async (req: Request, res: Response): Promise<void> => {
  try {
    const { query } = req.query;
    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          {
            title: {
              contains: String(query),
            },
          },
          {
            description: {
              contains: String(query),
            },
          },
        ],
      },
    });
    const projects = await prisma.project.findMany({
      where: {
        OR: [
          {
            name: {
              contains: String(query),
            },
          },
          {
            description: {
              contains: String(query),
            },
          },
        ],
      },
    });

    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: String(query),
            },
          },
        ],
      },
    });

    res.json({ tasks, projects, users });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: `Error Performing Search : ${error.message}` });
  }
};
