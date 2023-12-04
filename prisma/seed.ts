import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const test_order_1 = await prisma.orders.create({
    data: {
      Bun: "Standard",
      Cheese: "1",
      Lettuce: "1",
      Onion: "1",
      Sauce: "1",
      Tomato: "1",
    },
  });

  const test_order_2 = await prisma.orders.create({
    data: {
      Bun: "Standard",
      Cheese: "1",
      Lettuce: "1",
      Onion: "1",
      Sauce: "1",
      Tomato: "1",
    },
  });

  const test_order_3 = await prisma.orders.create({
    data: {
      Bun: "Standard",
      Cheese: "1",
      Lettuce: "1",
      Onion: "1",
      Sauce: "1",
      Tomato: "1",
    },
  });

  console.log({ test_order_1, test_order_2, test_order_3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  