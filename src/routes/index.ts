import { Router } from "express";

import { todoRoutes } from "./todo.routes";

const router = Router();

router.use("/todo", todoRoutes);

export { router };
