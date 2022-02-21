import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from "../../../lib/prisma";

const KEY = 'sfadfgsjkjlyuifgnbmfu';

export default async function(req: NextApiRequest, res: NextApiResponse){
  const { email, password } = req.body;
  const users = await prisma.user.findMany();
  const user = users.find((user) => {
    return (user.email === email && user.password === password);
  });

  if(!email.trim() || !password.trim() || !user){
    res.statusCode = 404;
    res.end('Error');
    return
  }

  res.json({
    token: jwt.sign({
      name: user.name,
      email: user.email,
      id: user.id,
    }, KEY)
  })
}
