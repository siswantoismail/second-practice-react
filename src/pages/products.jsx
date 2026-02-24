import { useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    image: "/images/shoes1.jpg",
    price: 1000000,
    description:
      "Sepatu Nike adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Nike, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi, desain yang stylish",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    image: "/images/shoes2.jpg",
    price: 1200000,
    description:
      "Sepatu Adidas adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Adidas, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi.",
  },
  {
    id: 3,
    name: "Sepatu Reebok",
    image: "/images/shoes3.jpg",
    price: 1500000,
    description:
      "Sepatu Reebok adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Reebok, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi,.",
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const [cart, setCart] = useState([
    {
      id: "1",
      qty: 1,
    },
  ]);

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id == id)) {
      setCart(
        cart.map((item) =>
          item.id == id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <nav className="flex justify-end h-10 bg-blue-600 items-center px-10 text-white ">
        {email}
        <Button
          classname="bg-black text-white font-bold px-2 rounded text-sm ml-4"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </nav>

      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6 px-5">
          <h1 className="text-2xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id == item.id,
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
