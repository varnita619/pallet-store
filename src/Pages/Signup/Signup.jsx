import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signup/Signup.css";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../Context/AuthContext";
import { signupHandler } from "../../backend/controllers/AuthController";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signUpFormHandler = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const {
          status,
          data: { encodedToken },
        } = await axios.post("/api/auth/signup", formData);
        localStorage.setItem("Signup-Token", encodedToken);
        if (status === 201) {
          setFormData({ firstName: "", lastName: "", email: "", password: "" });
          if (encodedToken) {
            navigate("/login");
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <form onSubmit={(e) => signUpFormHandler(e)}>
        <div className="auth-container">
          <div className="signup-container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            {/* <hr /> */}

            <label>
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="firstName"
              value={formData.firstName}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  firstName: event.target.value,
                }))
              }
              required
            />

            <label>
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="lastName"
              value={formData.lastName}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  lastName: event.target.value,
                }))
              }
              required
            />

            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="********"
              name="psw"
              value={formData.password}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              required
            />

            <label>
              <input
                type="checkbox"
                name="remember"
                className="remember-me-checkbox"
              />
              Remember me
            </label>

            <p>
              By creating an account you agree to our
              <a href="#" className="terms-condition">
                Terms & Privacy
              </a>
              .
            </p>

            <div className="clearfix">
              <button
                type="submit"
                className="signupbtn anchor-btn"
                // onClick={(e) => signUpFormHandler(e)}
              >
                Sign Up
              </button>
            </div>

            <div className="have-account">
              <Link to="/login">Already have an account </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export { Signup };
