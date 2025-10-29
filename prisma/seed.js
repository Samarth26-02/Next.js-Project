// prisma/seed.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 🧠 Example: inserting sample users
  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ],
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('❌ Seeding error:', e)
    prisma.$disconnect()
    process.exit(1)
  })
