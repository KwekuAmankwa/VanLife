import React, {Suspense} from "react";
import { redirect, useLoaderData, Form, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";



export function loaderFunction({request}){
    return new URL(request.url).searchParams.get("message")
     
}

export async function actionFunction({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

    const data = await loginUser({email, password})
    console.log(data)
    if (data) {

        localStorage.setItem("loggedin", "true")
        return redirect(pathname)
    }else{
        return "User does not exist."
    }
}


export default function Login(){
    const navigation = useNavigation()
    const errorMessage = useActionData()
    const message = useLoaderData()

    return (
        <div className="login-container">
                <h1>Sign in to your account</h1>
                {message && <h3>{message}</h3>}
                {errorMessage && <h3>{errorMessage}</h3>}
                <Form className="login-form" method="post" replace >
                    <div className="login-inputs">
                        <input
                            className="input-email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className="input-password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button disabled= {navigation.state === "submitting"}>
                        {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </Form>
                <div className="form-suggest">
                    <p>Don't have an account?</p>
                    <p>Create one now</p>
                </div>
        </div>

    )
}