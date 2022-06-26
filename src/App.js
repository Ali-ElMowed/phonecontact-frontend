import './App.css';
import ViewContacts from './pages/ViewContacts';
import ContactPage from './pages/ContactPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './router/auth';
import store from './app/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}

export default App;
