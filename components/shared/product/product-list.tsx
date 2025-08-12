import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({
  products,
  title,
  limit,
}: {
  products: Product[];
  title?: string;
  limit?: number;
}) => {

  const limitedProduct = limit ? products.slice(0, limit) : products; 
    
  return (
    <div className="my-2">
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      {limitedProduct.length > 0 ? (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedProduct.map((product) => {
            return <ProductCard product={product} key={product.slug} />;
          })}
        </div>
      ) : (
        <p>No record found</p>
      )}
    </div>
  );
};

export default ProductList;
