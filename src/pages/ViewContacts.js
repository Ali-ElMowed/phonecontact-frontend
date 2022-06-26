import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewContacts = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        const res = await fetch("http://localhost:3000/api/contact/getContacts");
        const data = res.json();
        return data;
    }

    useEffect(() => {
        const getData = async () => {
            const contacsFromSurvey = await getContacts();
            setContacts(contacsFromSurvey);
            console.log(contacsFromSurvey);
        };
        getData();
    }, []);



    return (
        <div className="container">
            {contacts.map((contact) => {
                return (
                    <div
                        key={contact._id}
                        className="contact"
                        onClick={() => {
                            navigate(`${contact._id}`)
                        }}>
                        <h2>{contact.name}</h2>
                        <button>Click me</button>
                    </div>
                );
            })}
        </div>
    );
}
export default ViewContacts;