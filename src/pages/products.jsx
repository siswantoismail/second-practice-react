import CardProduct from "../components/Fragments/CardProduct";

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header></CardProduct.Header>
        <CardProduct.Body title="Sepatu Nike">
          Sepatu Nike adalah sepatu olahraga yang dirancang dan diproduksi oleh
          perusahaan Nike, Inc. Sepatu ini dikenal karena kualitasnya yang
          tinggi, desain yang stylish, dan teknologi inovatif yang digunakan
          untuk meningkatkan performa atlet.
        </CardProduct.Body>
        <CardProduct.Footer price="1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header></CardProduct.Header>
        <CardProduct.Body title="Sepatu Nike">
          Sepatu Nike adalah sepatu olahraga yang dirancang dan diproduksi oleh
          perusahaan Nike, Inc. Sepatu ini dikenal karena kualitasnya yang
          tinggi, desain yang stylish, dan tek
        </CardProduct.Body>
        <CardProduct.Footer price="2.000.000" />
      </CardProduct>
    </div>
  );
}
