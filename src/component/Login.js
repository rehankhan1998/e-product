import React, { useEffect, useState } from "react";
import Rehan from "../aessets/yung.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpass, setwarnpass] = useState(false);
  const [danger, setdanger] = useState(true);
  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name == "email") {
      if (value.length > 0) {
        setdanger(true);
      }
    }
    setinputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);
    if (inputs.email.length < 1) {
      setdanger(false);
    }
    if (inputs.email == "") {
      setwarnemail(true);
    } else if (inputs.password == "") {
      setwarnpass(true);
    } else {
      alert("Logged in Successfully");
    }
  };
  const Eye = () => {
    if (pass == "password") {
      setpass("text");
      seteye(false);
    } else {
      setpass("password");
      seteye(true);
    }
  };
  // navigate to login page

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/ Login");
  //   }
  // }, []);

  // login api
  let navigate = useNavigate();
  const loginHandler = async () => {
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        username: "rehan",
        password: "1234567890",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data[0]?.token);
        console.log(res?.data[0]?.token);
        if (res.success === true) {
          toast.success("Regsistered Successfully !", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          toast.error("Invalid Data Please Try Again!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  return (
    <>
      <div className="container-login-main">
        <div className="card-tech">
          <div className="form-hai">
            <div className="left-side-you">
              <img src={Rehan} />
            </div>

            <div className="right-side-php">
              <div className="register-main">
                <p>
                  Not a member? <a href="#">Register Now</a>
                </p>
              </div>

              <div className="hello-login-heading">
                <h2>Login</h2>
                <h4>Please login here </h4>
              </div>

              <form onSubmit={submitForm}>
                <div className="input_text_emails">
                  <input
                    className={`${warnemail ? "warning" : ""}`}
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={inputs.email}
                    onChange={inputEvent}
                  />
                  <p className={` ${danger ? "danger" : ""}`}>
                    <i className="fa fa-warning"></i>Please enter a valid email
                    address.
                  </p>
                </div>
                <div className="input_text_passwords">
                  <input
                    className={` ${warnpass ? "warning" : ""}`}
                    type={pass}
                    placeholder="Enter Password"
                    name="password"
                    value={inputs.password}
                    onChange={inputEvent}
                  />
                  <i
                    onClick={Eye}
                    className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                  ></i>
                </div>
                <div className="recovery-karo">
                  <p>Recovery Password</p>
                </div>
                <div className="btn-button-signupp">
                  <button type="submit" onClick={loginHandler}>
                    Sign in
                  </button>
                </div>
              </form>

              <hr />
              <div className="or-kya">
                <p className="">or signin with</p>
              </div>
              <div className="boxes-big">
                <span>
                  <img src="https://imgur.com/XnY9cKl.png" />
                </span>
                <span>
                  <img src="https://imgur.com/ODlSChL.png" />
                </span>
                <span>
                  <img src="https://imgur.com/mPBRdQt.png" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
