import type { Request, Response } from "express";
import type { CreateUser, Params, ResponseType, UpdateUser } from "./dto/users.dto.js";
import { UserService } from "./users.service.js";

export class UserController {
    static async create(req: Request<{}, {}, CreateUser>, res: Response<ResponseType>): Promise<Response> {
        try {
            const user = await UserService.create(req.body)

            return res.status(201).json({
                type: "Success",
                message: "Usuario Criado",
                data: user
            })
        } catch (error: unknown) {
            return res.status(500).json({
                type: "Warning",
                message: "Erro ao Criar Usuario"
            })
        }
    }
    static async findAll(req: Request, res: Response<ResponseType>): Promise<Response> {
        try {
            const users = await UserService.findAll()

            return res.status(201).json({
                type: 'Success',
                message: "Usuarios Encontrados",
                data: users
            })
        } catch (error) {
            return res.status(500).json({
                type: 'Warning',
                message: "Erro ao Encontrar Usuarios"
            })
        }
    }
    
    static async findUnique(req: Request<Params>, res: Response<ResponseType>): Promise<Response> {
        try {
            const users = await UserService.findUnique(req.params.id)

            return res.status(201).json({
                type: 'Success',
                message: "Usuarios Encontrados",
                data: users
            })
        } catch (error) {
            return res.status(500).json({
                type: 'Warning',
                message: "Erro ao Encontrar Usuarios"
            })
        }
    }
    
    static async update(req: Request<Params, {}, UpdateUser>, res: Response<ResponseType>): Promise<Response> {
        try {
            const users = await UserService.update(req.params.id, req.body)

            return res.status(201).json({
                type: 'Success',
                message: "Usuarios Encontrados",
                data: users
            })
        } catch (error) {
            return res.status(500).json({
                type: 'Warning',
                message: "Erro ao Encontrar Usuarios"
            })
        }
    }
    
    static async delete(req: Request<Params>, res: Response<ResponseType>): Promise<Response> {
        try {
            const users = await UserService.delete(req.params.id)

            return res.status(201).json({
                type: 'Success',
                message: "Usuarios Encontrados",
                data: users
            })
        } catch (error) {
            return res.status(500).json({
                type: 'Warning',
                message: "Erro ao Encontrar Usuarios"
            })
        }
    }
    
}