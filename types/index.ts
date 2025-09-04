import { z } from "zod";
import {
  insertCartSchema,
  insertProductSchema,
  cartItemSchema,
  signUpFormSchema,
  shippingAddressSchema,
} from "@/lib/validators";
import { Control, FieldValues } from "react-hook-form";

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


export interface TextFieldProps<T extends FieldValues> {
  control: Control
  name: keyof T & string
  label: string
  placeholder?: string
  description?: string
}
