import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Constants from "../../api/Constants";
import Endpoints from "../../api/Endpoints";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart-actions";

const ProductDetailPage = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_ID_URL + id)
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const onClickHandler = () => {
    console.log('clicked')
    dispatch(addToCart(product));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{
            backgroundColor: "#fff",
            marginTop: "50px",
            padding: "30px",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <img
                src={Constants.IMAGE_URL + product.image}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3>{product.productName}</h3>
              <p>{product.unit}</p>
              <p>{product.description} </p>
              <br />
              <h2>
                <span>&#8377;</span>
                {product.price}
                <span
                  style={{
                    fontSize: "22px",
                    marginLeft: "10px",
                    color: "#888",
                  }}
                >
                  <del>
                    <span>&#8377;</span>
                    {product.mrp}
                  </del>
                </span>
              </h2>
              <br />
              <button className="btn btn-primary" onClick={onClickHandler}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
