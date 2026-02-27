import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
      // return response.data;
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      console.log("Returning empty array due to error.");
      // return [];
    });
};

export default getProducts;
