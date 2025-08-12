// export const metadata = {
//   title: "Home"
// }

import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProduct } from "@/lib/actions/product.action";

// const delay = (ms:number) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

export default async function Home() {
  // await delay(2000);
  const latestProduct = await getLatestProduct();

  return (
    <div className='space-y-8'>
      <h2 className='h2-bold'>Latest Products</h2>
      <ProductList title='Newest Arrivals' products={latestProduct} />
    </div>
  );
}
