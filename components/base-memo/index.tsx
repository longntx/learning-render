import Main from "@/components/main-memo";
import Navbar from "@/components/nav";
import { useState } from "react";

const Base = () => {
  console.log("</Base>");
  const [cart, setCart] = useState([]);
  return (
    <>
      <Main setCart={setCart} />
      <Navbar cart={cart} />
    </>
  );
};

export default Base;
