import ViewContacts from './pages/ViewContacts';
import ContactPage from './pages/ContactPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Auth() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/contacts" element={<ViewContacts />}></Route>
                <Route path="user/contacts/:id" element={<ContactPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Auth;
