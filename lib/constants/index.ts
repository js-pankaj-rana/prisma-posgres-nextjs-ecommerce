export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prostore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "An e-commerce store for testing";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000/";

// header labels

export const THEME_DROPDOWN = ["light", "dark", "system"];

// latest product limit

export const LATEST_PRODUCT_LIMIT =
  Number(process.env.LATEST_PRODUCT_LIMIT) || 4;

export const signInDefaultValues = {
  email: "",
  password: ""
}

export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const shippingAddressDefaultValues = {
  fullName: 'John Doe',
  streetAddress: '123 Main St',
  city: 'Anytown',
  postalCode: '12345',
  country: 'USA',
};