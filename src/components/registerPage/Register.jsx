import { useState } from "react";
import "./Register.css";

function Register() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [animate, setAnimate] = useState("");

    return (
        <>
            <section className="auth-section">
                <div className={`auth-box ${isSignUp ? "active" : ""} ${animate}`}>
                    <div className="form-box">
                        {isSignUp ? (
                            <>
                                <h2>Create Account</h2>
                                <div className="links">
                                    <div>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div>
                                        <i class="fa-brands fa-google"></i>
                                    </div>
                                    <div>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                </div>
                                <p>or use your email for registration</p>
                                <div className="inputs-signup">
                                    <input type="text" placeholder="Full Name" />
                                    <input type="email" placeholder="Email Address" />
                                    <input type="password" placeholder="Password" />
                                </div>
                                <button>Sign Up</button>
                                <p className="para-switch">
                                    Do you have an account?
                                    <a
                                        className="switch-link"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setAnimate("animate-out");

                                            setTimeout(() => {
                                                setIsSignUp(false);
                                                setAnimate("animate-in");

                                                setTimeout(() => {
                                                    setAnimate("");
                                                }, 400);
                                            }, 400);
                                        }}
                                    >
                                        Go on
                                    </a>
                                </p>
                            </>
                        ) : (
                            <>
                                <h2>Sign In</h2>
                                <div className="links">
                                    <div>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div>
                                        <i class="fa-brands fa-google"></i>
                                    </div>
                                    <div>
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                </div>
                                <p>or use your account</p>
                                <div className="inputs-signin">
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                </div>
                                <a href="#">Forget your password?</a>
                                <button>Sign In</button>
                                <p className="para-switch">
                                    Don't have an account?
                                    <a
                                        className="switch-link"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setAnimate("animate-out");

                                            setTimeout(() => {
                                                setIsSignUp(true);
                                                setAnimate("animate-in");

                                                setTimeout(() => {
                                                    setAnimate("");
                                                }, 400);
                                            }, 400);
                                        }}
                                    >
                                        Create one
                                    </a>
                                </p>
                            </>
                        )}
                    </div>

                    <div className="overlay-box">
                        {isSignUp ? (
                            <>
                                <h2>Welcome Back!</h2>
                                <p>
                                    Stay connected by logging in with your credentials and
                                    continue your experience
                                </p>
                                <button onClick={() => setIsSignUp(false)}>Sign In</button>
                            </>
                        ) : (
                            <>
                                <h2>Hello, Friend!</h2>
                                <p>
                                    Begin your amazing journey by creating an account with us
                                    today
                                </p>
                                <button onClick={() => setIsSignUp(true)}>Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
