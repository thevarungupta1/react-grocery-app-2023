import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const {catId} = useParams()

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_CATID_URL + catId)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [catId]);

  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <div class="row">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
