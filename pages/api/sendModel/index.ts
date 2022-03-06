import prisma from '../../../lib/prisma';

export default async function sendTask(req, res) {
  const {
    model,
    brandId,
    price,
    image,
  } = req.body;

  const todo = await prisma.model.create({
    data: {
      model,
      brandId,
      price,
      image,
    },
  });
  res.json(todo);
}
