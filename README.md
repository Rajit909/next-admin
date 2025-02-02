This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Prisma ORM

## 1. Create TypeScript project and set up Prisma ORM

- To Install the Prisma CLI as a development dependency in the project:

```bash
    npm install prisma --save-dev
```

- Finally, set up Prisma ORM with the init command of the Prisma CLI:

```bash
    npx prisma init --datasource-provider sqlite
```

## 2. Model your data in the Prisma schema

The Prisma schema provides an intuitive way to model data. Add the following models to your schema.prisma file:

 - prisma/schema.prisma

 ```javaScript
    model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
 ```
 Models in the Prisma schema have two main purposes:

- Represent the tables in the underlying database
- Serve as foundation for the generated Prisma Client API

In the next section, you will map these models to database tables using Prisma Migrate.

## 3. Run a migration to create your database tables with Prisma Migrate


At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

```bash
npx prisma migrate dev --name init
```

This command did three things:

1. It created a new SQL migration file for this migration in the prisma/migrations directory.
2. It executed the SQL migration file against the database.
3. It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).

Because the SQLite database file didn't exist before, the command also created it inside the prisma directory with the name dev.db as defined via the environment variable in the .env file.


Congratulations, you now have your database and tables ready. Let's go and learn how you can send some queries to read and write data!

