export async function getVans(){
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to get vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans 
}