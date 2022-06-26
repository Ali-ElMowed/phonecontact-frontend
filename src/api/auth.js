import axios from 'axios'

export const login = async (email, password) => {
    const res = axios.post("http://localhost:3000/api/user/auth/login", {
        email,
        password
    })
    return res
}
export const register = async (name, email, password) => {
    const res = axios.post("http://localhost:3000/api/user/auth/register", {
        name,
        email,
        password
    })
    return res
}