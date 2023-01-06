import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import SubCategory from "../../components/SubCategory";

const ProductPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
  })

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SubCategory />
          </div>
          <div className="col-md-9">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
