"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req.query;
        const tasks = yield prisma.task.findMany({
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
        const projects = yield prisma.project.findMany({
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
        const users = yield prisma.user.findMany({
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
    }
    catch (error) {
        res
            .status(500)
            .json({ error: `Error Performing Search : ${error.message}` });
    }
});
exports.search = search;
