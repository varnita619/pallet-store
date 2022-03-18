import React from 'react';
import "../Login/Auth.css"
import { Link } from 'react-router-dom';
import "../Signup/Signup.css"

function Login() {
  return (
    <>
      <div className="auth-container">
        <div className="signup-container">
          <h1>Login</h1>
          <hr />

          <label f><b>Email address</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label><b>Password</b></label>
          <input
            type="password"
            placeholder="*******"
            name="psw"
            required
          />

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style={{marginBottom: '15px'}}
            />
            Remember me
          </label>

          <div className="clearfix">
            <button type="submit" className="signupbtn"><Link className="anchor-btn" to='/productlisting'>
              Login</Link></button>
          </div>

          <div className="have-account">
            <Link to="/signup">Don't have an account ? </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export { Login }
