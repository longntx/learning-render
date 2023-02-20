import Product from "@/components/product";

const Main = ({ setCart }: any) => {
  console.log("</Main>");
  return (
    <>
      <Product setCart={setCart} />
    </>
  );
};

export default Main;
