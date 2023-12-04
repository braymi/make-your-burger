-- CreateTable
CREATE TABLE "orders" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "Bun" STRING NOT NULL,
    "Cheese" STRING NOT NULL,
    "Lettuce" STRING NOT NULL,
    "Onion" STRING NOT NULL,
    "Sauce" STRING NOT NULL,
    "Tomato" STRING NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
