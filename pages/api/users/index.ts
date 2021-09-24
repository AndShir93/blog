import prisma from '../../../lib/prisma';

export default async function handle(req, res){
  const { name, email, password } = req.body;
  const date = new Date();
  const createdAt = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  const result = await prisma.user.create({
    data: {
      name,
      email,
      password,
      createdAt,
    },
  });
  res.json(result);
}
