import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import "./Login.css";

const Login = () => {
    const defaultValues = {
        name: "",
        email: ""
      };
    
      const validationSchema=yup.object().shape({
      name:yup.string().required("enter the string only"),
      email:yup.string().required("pls enter the email").email("pls enter the valid email")
        })
    
    
      const handleSubmit=(value)=>{
        console.log("values",value);
      }
    
    
  return (
    <>
    <div className="main">
     <div className="container1">
      <div className="col-md-12 text-center  mt-3 mb-3">
        <h1> Login Page</h1>
        <Formik initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
          <Form>
            <div className="col-md-12">
              
              <Field type="text" placeholder="Enter The Name" name="name" className="form-control" autoComplete="off"/>
              <p className="text-danger">
                <ErrorMessage name="name"/>
              </p>
            </div>
            <div className="col-md-12">
              
              <Field type="email" placeholder="Enter The Email" name="email" className="form-control " autoComplete="off"/>
              <p className="text-danger">
                <ErrorMessage name="email"/>
              </p>
            </div>
            

            <div className="d-grid gap-2">
              <button className="btn btn-primary " type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Login;
