import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Título Post 1' },
    update: {},
    create: {
      title: 'Título Post 1',
      body: 'Corpo Post 1',
      description: 'Descrição Post 1',
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Título Post 2' },
    update: {},
    create: {
      title: 'Título Post 2',
      body: 'Corpo Post 1',
      description: 'Descrição Post 2',
      published: true,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });