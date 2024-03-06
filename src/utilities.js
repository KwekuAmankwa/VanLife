import { redirect } from "react-router-dom";

export async function requireAuth(request){

    const pathname = new URL(request.url).pathname

    const isLoggedIn = localStorage.getItem("loggedin")

    const response = redirect(`/login?message=You must login first.&redirectTo=${pathname}`)

    if (!isLoggedIn) {
        return Object.defineProperty(response, 'body', { value: true })
    }
    return null
}
