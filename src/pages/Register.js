import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { login, register } from "../api/auth";
import { set } from "../app/slices/user";

const RegisterPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleRegister = async () => {
        try {
            const res = await register(name, email, password);
            dispatch(set(res?.data))
            localStorage.setItem("user", JSON.stringify(res?.data))
        } catch (error) {
            console.log(error);
        }

    };



    return (
        <div>
            <input placeholder="Name" type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
            <input placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <input placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
            <button onClick={handleRegister}>Register</button>
        </div>
    )


}

export default RegisterPage;