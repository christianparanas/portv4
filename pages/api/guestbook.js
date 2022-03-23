import { getSession } from 'next-auth/react';

import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const entries = await prisma.guests.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        name: entry.name,
        image: entry.image,
        updatedAt: entry.updatedAt
      }))
    );
  }

  const session = await getSession({ req });
  const { email, name, image } = session.user;

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.guests.create({
      data: {
        email,
        body: (req.body.body || '').slice(0, 500),
        name: name,
        image: image
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      name: newEntry.name,
      image: newEntry.image,
      updatedAt: newEntry.updatedAt
    });
  }

  return res.send('Method not allowed.');
}

