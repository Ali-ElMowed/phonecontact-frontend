import axios from 'axios'

export const getContacts = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.get(`http://localhost:3000/api/contact/getContacts/${user?.user}`);
    return res;
}
