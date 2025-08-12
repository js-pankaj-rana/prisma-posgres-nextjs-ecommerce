import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const {string, array, boolean, coerce} = z;

const currency = string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places (e.g., 49.99)'
  );

export const insertProductSchema = z.object({
  name: string().min(3, "Name must be at least 3 characters"),
  slug: string().min(3, "Slug must be at least 3 characters"),
  category: string().min(3, "Category must be at least 3 characters"),
  brand: string().min(3, "Brand must be at least 3 characters"),
  description: string().min(3, "Description must be at least 3 characters"),
  stock: coerce.number(),
  images: array(string()).min(1, "Product must have at least one image"),
  isFeatured: boolean(),
  banner: string().nullable(),
  price: currency
});
