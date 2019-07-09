const { prisma } = require('../src/generated/prisma-client');
require('dotenv').config({ path: 'variables.env' });

async function main() {
  await prisma.createUser(
    {
      data: {
        email: process.env.ADMIN_EMAIL,
        name: 'Admin',
        password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m', // "secret42"
        permissions: { set: ['ADMIN'] },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    })
}

main()