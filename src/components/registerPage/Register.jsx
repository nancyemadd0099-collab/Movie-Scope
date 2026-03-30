
import { useForm } from "react-hook-form";
import "./Register.css";
import { useState } from "react";

function Register() {
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <section className="register-section">
                <div className="register-card">
                    <h1>Welcome Back</h1>
                    <p>Enter your credentials to access your account</p>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="email-box">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                {...register("email", {
                                    required: "Email can't be empty",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address format"
                                    }
                                })}
                            />

                            {errors.email && (
                                <p className="error">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="password-box">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Your Paswword"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters"
                                        }
                                    })}
                                />
                                <i
                                    className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`}
                                    onClick={() => setShowPassword(prev => !prev)}
                                ></i>
                            </div>
                        </div>
                        <div className="remember-forgot">
                            <div className="remember">
                                <input type="checkbox" />
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <div className="forget">
                                <a href="#">Forget password?</a>
                            </div>
                        </div>

                        <div className="signin">
                            <button>Login</button>
                        </div>

                        <div className="auth-switch">
                            <p>Don't have an account?<span>Sign up</span> </p>
                        </div>
                    </form>


                </div >
            </section >

        </>
    );
}

export default Register;
