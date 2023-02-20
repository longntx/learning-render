const Product = ({ setCart }: any) => {
  console.log("<Product/>");
  return (
    <>
      <button onClick={() => setCart((cart: any) => [...cart, "product"])}>
        Add to cart
      </button>
    </>
  );
};

export default Product;
