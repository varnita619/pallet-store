import React from 'react';
import "../Login/Auth.css"
import { Link } from 'react-router-dom';
import {TopBar} from "../../Components";

function Logout(){
    return(
        <>
        <TopBar />
          <div className="auth-container">
        <h2>Thank You For Using Pallet Fashion Store</h2>
        <p>Do you like to Login again?</p>
        <button type="submit" className="login-btn">
            <Link className="anchor-btn" to='/login'>
            Login</Link>
            </button>
    </div>
        </>
    )
}

export {Logout};
