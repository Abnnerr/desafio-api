import { Router, type Request, type Response } from "express";
import { UserController } from "./users.controller.js";
import type { CreateUser, Params, ResponseType, UpdateUser } from "./dto/users.dto.js";

const router = Router()


router.post('/', async (req: Request<{}, {}, CreateUser>, res: Response<ResponseType>) => await UserController.create(req, res))
router.get('/', async (req: Request, res: Response<ResponseType>) => await UserController.findAll(req, res))
router.get('/:id', async (req: Request<Params>, res: Response<ResponseType>) => await UserController.findUnique(req, res))
router.put('/:id', async (req: Request<Params, {}, UpdateUser>, res: Response<ResponseType>) => await UserController.update(req, res));
// router.delete("/:id",async (req: Request<Params>, res: Response<ResponseType>) =>await UserController.delete(req, res));

export default router