//É no model que fazemos a consulta para o banco de dados.
//ex: SELECT * FROM bruxo; Porém, usamos o Prisma.
//que abstrai o SQL para nós.

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findALL =  async () => {
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const findById = async (id) => {
    return await prisma.bruxo.findUnique({
        where: { id: Number(id) }
    });
};

export const create = async (data) => {
    return await prisma.bruxo.create({
        data: {
            nome:data.nome,
            casa:data.casa,
            patrono:data.patrono,
            varinha: data.varinha,
            anoMatricula:data.anoMatricula
        }
    })

}