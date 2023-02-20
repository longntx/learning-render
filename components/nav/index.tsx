import Cart from "@/components/cart";

const Navbar = ({ cart }: any) => {
  console.log("<Navbar/>");
  return (
    <>
      <Cart cart={cart}/>
    </>
  );
};

export default Navbar;
