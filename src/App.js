import './App.css';
import ViewContacts from './pages/ViewContacts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/user/contacts" element={<ViewContacts/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
