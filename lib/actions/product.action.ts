import { LATEST_PRODUCT_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";
import { prisma } from "@/db/prisma";

export async function getLatestProduct() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug },
  });
}
