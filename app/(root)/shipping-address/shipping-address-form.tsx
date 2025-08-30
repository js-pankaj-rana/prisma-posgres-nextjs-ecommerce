"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingAddress } from "@/types";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingAddressSchema } from "@/lib/validator";
import { ControllerRenderProps } from "react-hook-form";
import { shippingAddressDefaultValues } from "@/lib/constants";
import { toast } from "sonner";
import { useTransition } from "react";
import { updateUserAddress } from "@/lib/actions/user.actions";
import CheckoutSteps from "@/components/shared/checkout-steps";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader } from "lucide-react";

const ShippingAddressForm = ({
  address,
}: {
  address: ShippingAddress | null;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  return <>Shipping Form</>;
};

export default ShippingAddressForm;
