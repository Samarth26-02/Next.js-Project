import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Samarth', email: 'samarth@example.com', password: '12345' },
      { name: 'Alex', email: 'alex@example.com', password: 'abcdef' },
    ],
  });
}

main()
  .then(() => {
    console.log('✅ Database seeded successfully!');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
