import { Router } from "express";
import CreateUserController from "src/app/modules/users/useCases/createUser/CreateUserController";
import FindUserController from "src/app/modules/users/useCases/findUser/FindUserController";

const usersRoutes = Router();

usersRoutes.post("/", CreateUserController.handle);
usersRoutes.get("/:id", FindUserController.handle);

export { usersRoutes };
