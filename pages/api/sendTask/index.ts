import prisma from "../../../lib/prisma";

export default async function sendTask(req, res) {
  const {day, title, description} = req.body;
  const date = new Date();
  const createdAt = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  const todo = await prisma.todos.create({
    data: {
      text: title,
      description,
      createdAt,
      authorId: 20,
      done: false,
      day,
    },
  });
  res.json(todo);
}
