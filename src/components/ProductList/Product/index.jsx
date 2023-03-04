import React from "react";
import { Link } from "react-router-dom";
import Constants from "../../../api/Constants";
const Product = (props) => {
  const { _id, productName, image, mrp, price, unit } = props.data;

  return (
    <div className="col-sm-4">
      <div className="card">
        <img src={Constants.IMAGE_URL + image} 
        className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{unit}</p>
          <h2>
            <span>&#8377;</span>
            {price}
            <span
              style={{ fontSize: "22px", 
              marginLeft: "10px", color: "#888" }}
            >
              <del>
                <span>&#8377;</span>
                {mrp}
              </del>
            </span>
          </h2>
          <Link to={ '/products/detail/'+ _id } className="btn btn-primary btn-block">
            Show Detail
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
