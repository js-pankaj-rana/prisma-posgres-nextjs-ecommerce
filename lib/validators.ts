import { number, z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const {string, array, boolean, email, coerce} = z;

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

export const signInFormSchema = z.object({
  email: email().min(3, 'Email must be at least 3 characters'),
  password: string().min(6, 'Password must be at least 6 characters'),
});

export const signUpFormSchema = z.object({
  name: string().min(3, 'Name must be at least 3 characters'),
  email: email().min(3, 'Email must be at least 3 characters'),
  password: string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: string().min(6, 'Confirm password must be at least 6 characters'),
}).refine((data)=> data.confirmPassword === data.password, {
  message: "Password don't match with confirm.",
  path: ['confirmPassword']
});


// Cart Schema

export const cartItemSchema = z.object({
  productId: string().min(1, 'Product is required'),
  name: string().min(1, 'Name is required'),
  slug: string().min(1, 'Slug is required'),
  image: string().min(1, 'Image is required'),
  qty: number().int().nonnegative("Quantity must be a positive number"),
  price: currency
})

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: string().min(1, "Session cart id is required."),
  userId: string().optional().nullable()
})

export const shippingAddressSchema = z.object({
  fullName: string().min(3, 'Name must be at least 3 characters'),
  streetAddress: string().min(3, 'Address must be at least 3 characters'),
  city: string().min(3, 'city must be at least 3 characters'),
  postalCode: string().min(3, 'Postal code must be at least 3 characters'),
  country: string().min(3, 'Country must be at least 3 characters'),
  lat: number().optional(),
  lng: number().optional(),
});