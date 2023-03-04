import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { numberCart } = useSelector((state) => state);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        GroceryApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <Link to="/cart" className="btn btn-primary">
            Cart <span className="badge badge-light">{numberCart}</span>
          </Link>
          ||
          {loggedIn ? (
            <Link onClick={onLogoutHandler} className="btn btn-primary">
              Logout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
