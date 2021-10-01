import { Route } from "react-router-dom";

const Cart = () => {
  const Product = [
    {
      id: 1,
      description: "white color",
      price: "$2000",
      img: "../src/assets/apple-iphone-12.jpeg",
    },
    {
      id: 2,
      description: "black color",
      price: "$3000",
      img: "#",
    },
    {
      id: 3,
      description: "yellow  color",
      price: "$4000",
      img: "#",
    },
  ];

  // <Route  exact path="/product"component={Product} />
  return (
    <>
      {Product.map((items) => (
        <div>
          <span>{items.id}</span>
          <span>{items.description}</span>
          <span>{items.price}</span>
          <img src={items.img} alt="product" />
        </div>
      ))}
    </>
  );
};

export default Cart;
