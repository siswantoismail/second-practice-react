import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    image: "/images/shoes1.jpg",
    price: "1.000.000",
    description:
      "Sepatu Nike adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Nike, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi, desain yang stylish",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    image: "/images/shoes2.jpg",
    price: "1.200.000",
    description:
      "Sepatu Adidas adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Adidas, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi.",
  },
  {
    id: 3,
    name: "Sepatu Reebok",
    image: "/images/shoes3.jpg",
    price: "1.500.000",
    description:
      "Sepatu Reebok adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Reebok, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi,.",
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}
