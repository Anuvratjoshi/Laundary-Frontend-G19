import React from "react";
// import lock from '../images/lock.png'
// import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
    <><nav>
        <div className="nav-wrapper white">
            <h5 to="" className="brand-logo left">Laundry</h5> {/*left to put the logo on left when screen size decreased*/}
            <ul id="nav-mobile" className="right">
                <li>Home</li>
                <li>Pricing</li>
                <li>Career</li>
                <li id="sign-in">Sign in</li>
            </ul>
        </div>
    </nav>
    {/* <section id="main-body">
        <section id="laundry-section">
            <h1>Laundry service</h1>
            <p>Doorstep Wash & Dryclean Service</p>
            <h6>Don't Have An Account?</h6>
            <button style={{float:"left",marginLeft:"10px"}}>Register</button>
        </section>
        <section id="form-section">
            <h3>SIGN IN</h3>
            
            <form >
                <div>
                    <label htmlFor="mobileNo">Mobile/email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <img src={lock} alt="lock/png" style={{position:"relative",left:"240px",top:"12px"}}/>

                    <input type="password"/>
                </div>
                <h6 style={{position:"relative",left:"180px",top:"-15px",color:"#4552C1",fontWeight:"500"}}>forgot password</h6>
                
            </form>
        </section>
    </section> */}
    </>)
}
export default Navbar