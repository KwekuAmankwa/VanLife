import { redirect } from "react-router-dom";

export async function requireAuth(request){

    const pathname = new URL(request.url).pathname

    const isLoggedIn = localStorage.getItem("loggedin")

    const message = "Login with email: b@b.com, password: p123"

    const response = redirect(`/login?message=${message}&redirectTo=${pathname}`)

    if (!isLoggedIn) {
        throw Object.defineProperty(response, 'body', { value: true })
    }
    return null
}
