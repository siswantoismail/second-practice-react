import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    image: "/images/shoes1.jpg",
    price: "1.000.000",
    description:
      "Sepatu Nike adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Nike, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi, desain yang stylish, dan teknologi inovatif yang digunakan untuk meningkatkan performa atlet.",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    image: "/images/shoes2.jpg",
    price: "1.200.000",
    description:
      "Sepatu Adidas adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Adidas, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi, desain yang stylish, dan teknologi inovatif yang digunakan untuk meningkatkan performa atlet.",
  },
  {
    id: 3,
    name: "Sepatu Reebok",
    image: "/images/shoes3.jpg",
    price: "1.500.000",
    description:
      "Sepatu Reebok adalah sepatu olahraga yang dirancang dan diproduksi oleh perusahaan Reebok, Inc. Sepatu ini dikenal karena kualitasnya yang tinggi, desain yang stylish, dan teknologi inovatif yang digunakan untuk meningkatkan performa atlet.",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
}
