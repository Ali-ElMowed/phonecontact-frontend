import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { login } from "../api/auth";
import { set } from "../app/slices/user";

const LoginPage = () => {

    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('1234444444')
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleLogin = async () => {
        try {
            const res = await login(email, password);
            dispatch(set(res?.data))
            localStorage.setItem("user", JSON.stringify(res?.data))
        } catch (error) {
            console.log(error);
        }

    };



    return (
        <div>
            <input placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <input placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
            <button onClick={handleLogin}>login</button>
        </div>
    )


}

export default LoginPage;