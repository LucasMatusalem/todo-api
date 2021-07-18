import { Router } from "express";

import { usersRoutes } from "./users.routes";

// import { todoRoutes } from "./todo.routes";

const router = Router();

// router.use("/todo", todoRoutes);

router.use("/users", usersRoutes);

export { router };
