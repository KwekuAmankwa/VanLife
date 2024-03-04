import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [LoginForm, setLoginForm] = useState({email: "", password: ""})

    function handleSubmit(e){
        e.preventDefault()
        console.log(LoginForm)
    }

    function handleChange(){
        const {name, value} = e.target
        setLoginForm(prevLogin => ({
            ...prevLogin,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form className="login-form" onSubmit={handleSubmit} >
                <div className="login-inputs">
                    <input
                        className="input-email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={LoginForm.email}
                    />
                    <input
                        className="input-password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={LoginForm.password}
                    />
                </div>
                <button>Log in</button>
            </form>
            <div className="form-suggest">
                <p>Don't have an account?</p>
                <p>Create one now</p>
            </div>
        </div>
    )
}