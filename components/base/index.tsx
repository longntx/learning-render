import Main from "@/components/main";
import Navbar from "@/components/nav";
import { useState } from "react";

const Base = () => {
  const [cart, setCart] = useState([]);
  console.log("</Base>");
  return (
    <>
      <Main setCart={setCart} />
      <Navbar cart={cart} />
    </>
  );
};

export default Base;
