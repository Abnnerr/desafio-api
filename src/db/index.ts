import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


const connectionString = process.env.DATABASE_URL!;

// cria adapter
const adapter = new PrismaPg({ connectionString });

// instancia prisma com adapter
export const prisma = new PrismaClient({
    adapter
});