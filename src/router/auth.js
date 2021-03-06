// import ViewContacts from './pages/ViewContacts';
// import ContactPage from './pages/ContactPage'
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddContact from "../pages/AddContact";
import ContactPage from "../pages/ContactPage";
import LoginPage from '../pages/Login';
import RegisterPage from "../pages/Register";
import ViewContacts from "../pages/ViewContacts";

function Auth() {
    const user = useSelector(state => state.user)
    const getUser = JSON.parse(localStorage.getItem('user'))

    console.log(getUser?.token);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user?.token || getUser?.token ? <ViewContacts /> : <Navigate replace to="/login" />}></Route>
                <Route path="/add" element={user?.token || getUser?.token ? <AddContact /> : <Navigate replace to="/login" />}></Route>
                <Route path="/login" element={user?.token || getUser?.token ? <Navigate replace to="/" /> : <LoginPage />}></Route>
                <Route path="/register" element={user?.token || getUser?.token ? <Navigate replace to="/" /> : <RegisterPage />}></Route>
                <Route path="/contact/:id" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Auth;
