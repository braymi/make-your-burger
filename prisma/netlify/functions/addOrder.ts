import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

interface OrderEntry {
  Bun:     string,
  Cheese:  string,
  Lettuce: string,
  Onion:   string,
  Sauce:   string,
  Tomato:  string,
}

const handler: Handler = async (event, context) => {
  if(event.body) {
    const newOrder = JSON.parse(event.body) as OrderEntry;
    await prisma.orders.create({
      data: {
        Bun: String(newOrder.Bun),
        Cheese: String(newOrder.Cheese),
        Lettuce: String(newOrder.Lettuce),
        Onion: String(newOrder.Onion),
        Sauce: String(newOrder.Sauce),
        Tomato: String(newOrder.Tomato),
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(newOrder)
    };
  }

  return {
    statusCode: 500
  };
}


export { handler }
