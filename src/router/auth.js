// import ViewContacts from './pages/ViewContacts';
// import ContactPage from './pages/ContactPage'
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from '../pages/login';

function Auth() {
    const user = useSelector(state => state.user)
    const getUser = JSON.parse(localStorage.getItem('user'))

    console.log(getUser?.token);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user?.token || getUser?.token ? <>Logged in</> : <Navigate replace to="/login" />}></Route>
                <Route path="/login" element={user?.token || getUser?.token ? <Navigate replace to="/" /> : <LoginPage />}></Route>
                <Route path="/register" element={user?.token || getUser?.token ? <Navigate replace to="/" /> : <LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Auth;
