import prisma from "../../../lib/prisma";

export default async function sendTask(req, res) {
  const { brand } = req.body;

  const todo = await prisma.brand.create({
    data: {
      brand,
    },
  });
  res.json(todo);
}
