import React, { useState } from "react";
import axios from "axios";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Endpoints from "../../api/Endpoints";

const LoginPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    className: "",
  });
  // initailValues
  const initialValues = {
    email: "",
    password: "",
  };

  // onSubmit
  const onSubmit = (values) => {
    axios
      .post(Endpoints.LOGIN_URL, values)
      .then(
        (response) => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          setRequestResponse({
            textMessage: 'login success, thank you',
            className: "alert alert-success",
          });
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            className: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  // validationSchema
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("password is requird")
      .min(6, "password should be 6 char long"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <div className={requestResponse.className} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field                      
                        type="text"
                        name="password"
                        className="form-control"
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <input
                      type="submit"
                      value="Login"
                      disabled={!formik.isValid}
                      className="btn btn-primary btn-block"
                    />
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center">
              <Link to="/register">New User? Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
