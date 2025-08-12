"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="space-x-4">
      <Image
        src={images![currentImage]}
        className="min-h-[300px] object-cover object-center"
        alt={`product-image-${currentImage}`}
        width={1000}
        height={1000}
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={`thumbnail-image-${index}`}
            className={cn(
              "border   mr-2 cursor-pointer hover:border-orange-600",
              currentImage === index && "  border-orange-500"
            )}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              width={100}
              height={100}
              src={image}
              alt={`thumbnail-image-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
