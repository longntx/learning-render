import { memo } from "react";

const Product = memo(({ setCart }: { setCart: any }) => {
  console.log("<Product/>");
  return (
    <>
      <button onClick={() => setCart((cart: any) => [...cart, "product"])}>
        Add to cart
      </button>
    </>
  );
});

Product.displayName = "Product";

export default Product;
