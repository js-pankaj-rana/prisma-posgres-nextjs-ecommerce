import { z } from "zod";
import {
  insertCartSchema,
  insertProductSchema,
  cartItemSchema,
  signUpFormSchema,
  shippingAddressSchema,
} from "@/lib/validators";

export type User = z.infer<typeof signUpFormSchema> & {
  id: string;
  confirmPassword?: string;
};

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
  numReviews: number;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;

export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
