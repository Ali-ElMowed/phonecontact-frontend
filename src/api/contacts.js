import axios from 'axios'
import ContactPage from '../pages/ContactPage';

export const getContacts = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.get(`http://localhost:3000/api/contact/getContacts/${user?.user}`);
    return res;
}
export const addContact = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.post(`http://localhost:3000/api/contact/addContact`, data);
    return res;
}

export const deleteContact = async (data) => {
    const res = await axios.delete(`http://localhost:3000/api/contact/deleteContact/${data}`)
    return res;
}

export const getContactById = async (data) => {
    const res = await axios.get(`http://localhost:3000/api/contact/getContactById/${data}`)
    return res;
}