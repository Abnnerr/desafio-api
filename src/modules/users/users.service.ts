import type { motorista, veiculo } from "@prisma/client";
import { prisma } from "../../db/index.js"
import type { CreateUser, Params, UpdateUser } from "./dto/users.dto.js"

type MotoristaComVeiculo = motorista & { veiculo: veiculo | null };

export class UserService {
    static async create(dados: CreateUser): Promise<motorista> {
        try {
            const { nome, documento, placa, marca, modelo, ano } = dados
            if ([nome, documento, placa, marca, modelo, ano].some(item => !item)) throw new Error('Algum campo vazio')

            const user = await prisma.motorista.create({
                data: {
                    nome,
                    documento,
                    veiculo: {
                        create: {
                            placa,
                            marca,
                            modelo,
                            ano,
                        },
                    },
                },
            });
            return user
        } catch (error: any) {
            console.error(error.message)
            throw new Error(error.message || 'Erro ao Criar Usuario')
        }
    }
    static async findAll(): Promise<MotoristaComVeiculo[]> {
        try {
            const users = await prisma.motorista.findMany({
                include: { veiculo: true },
            });
            return users;
        } catch (error: any) {
            console.error(error);
            throw new Error(error.message || "Erro ao buscar usuários");
        }
    }

    static async findUnique(id: string): Promise<MotoristaComVeiculo | null> {
        try {
            const user = await prisma.motorista.findUnique({
                where: {
                    id: parseInt(id)
                },
                include: { veiculo: true },
            });
            return user;
        } catch (error: any) {
            console.error(error);
            throw new Error(error.message || "Erro ao buscar usuário");
        }
    }

    static async update(id: string, dados: UpdateUser): Promise<MotoristaComVeiculo> {
        try {
            const { nome, documento, placa, marca, modelo, ano } = dados;

            const user = await prisma.motorista.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    documento,
                    veiculo: {
                        ...(placa && { update: { placa, marca, modelo, ano }, })
                    }
                },
                include: { veiculo: true },
            });

            return user;
        } catch (error: any) {
            console.error(error);
            throw new Error(error.message || "Erro ao atualizar usuário");
        }
    }

    static async delete(id: string): Promise<MotoristaComVeiculo> {
        try {
            const user = await prisma.motorista.delete({
                where: {
                    id: parseInt(id)
                },
                include: { veiculo: true },
            });
            return user;
        } catch (error: any) {
            console.error(error);
            throw new Error(error.message || "Erro ao deletar usuário");
        }
    }

}