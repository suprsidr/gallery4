const { prisma } = require('../src/generated/prisma-client')

async function main() {
  await prisma.createUser({
    email: 'alice@prisma.io',
    name: 'Alice',
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m', // "secret42"
    posts: {
      create: {
        title: 'Join us for Prisma Day 2019 in Berlin',
        content: 'https://www.prisma.io/day/',
        published: true,
      },
    },
  })
}

main()