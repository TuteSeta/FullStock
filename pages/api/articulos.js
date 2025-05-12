import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const articulos = await prisma.articulo.findMany();
    return res.status(200).json(articulos);
  }

  if (req.method === 'POST') {
    const { codigo, descripcion, demanda, costoAlmacenamiento, costoPedido, costoCompra } = req.body;

    try {
      const nuevo = await prisma.articulo.create({
        data: {
          codigo,
          descripcion,
          demanda: parseInt(demanda),
          costoAlmacenamiento: parseFloat(costoAlmacenamiento),
          costoPedido: parseFloat(costoPedido),
          costoCompra: parseFloat(costoCompra),
        },
      });

      return res.status(201).json(nuevo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al crear el artículo' });
    }
  }

  res.status(405).end(); // método no permitido
}
