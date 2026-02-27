import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-56 bg-gray-500 border border-gray-400 rounded-lg shadow mx-2 flex flex-col justify-between mb-2">
      {children}
    </div>
  );
};

function Header() {
  return (
    <a href="#">
      <img
        src="/images/shoes1.jpg"
        alt="Shoes 1"
        className="p-6 rounded-t-lg"
      />
    </a>
  );
}

function Body({ children, title }) {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-sm font-bold text-white">
        {" "}
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button
        classname="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm"
        onClick={() => handleAddToCart(id)}
      >
        Add
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
