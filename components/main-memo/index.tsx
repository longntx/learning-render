import Product from "@/components/product-memo";
import { memo } from "react";

const Main = memo(({ setCart }: { setCart: any }) => {
  console.log("</Main>");
  return (
    <>
      <Product setCart={setCart} />
    </>
  );
});

Main.displayName = "Name";

export default Main;
