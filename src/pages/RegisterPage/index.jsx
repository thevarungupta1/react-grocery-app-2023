import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Endpoints from "../../api/Endpoints";
import styles from "./styles.module.css";

const RegisterPage = () => {
  // initalValues
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  // onSubmit
  const onSubmit = (values) => {
    //console.log("Form Data: ", values);
    axios
      .post(Endpoints.REGISTER_URL, values)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => console.log(error));
  };

  // validate
  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "first name is required";
    }

    if (!values.email) {
      errors.email = "email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "email is not valid";
    }

    if (!values.mobile) {
      errors.mobile = "mobile is required";
    }

    if (!values.password) {
      errors.password = "password is required";
    }

    return errors;
  };

  // validationSchema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("*first name is required"),

    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),

    mobile: Yup.string().required("mobile is required"),

    password: Yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log("Form errors: ", formik.errors);

  return (
    <div className="container">
      <Link to="/">
        <h2 className={styles.logo}> Grocery App</h2>
      </Link>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="form-control"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>

              <input
                type="submit"
                value="Register"
                disabled={!formik.isValid}
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              <Link to="/login">Already Registered? Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
