import React from 'react';
import { Link } from 'react-router-dom';
import "../Signup/Signup.css"

function Signup() {
    return (
        <>
            <div className="auth-container">
                <div className="signup-container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" required />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                    />

                    <label>
                        <input
                            type="checkbox"
                            checked="checked"
                            name="remember"
                            className='remember-me-checkbox'
                        />
                        Remember me
                    </label>

                    <p>
                        By creating an account you agree to our
                        <a href="#" className="terms-condition">Terms & Privacy</a>.
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="signupbtn"><Link className="anchor-btn" to='/productlisting'>
                            Sign Up</Link></button>
                    </div>

                    <div className="have-account">
                        <Link to="/login">Already have an account </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Signup }
