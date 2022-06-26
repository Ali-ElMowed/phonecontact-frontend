import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getContacts } from "../api/contacts";

const ViewContacts = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const contacsFromSurvey = await getContacts();
            setContacts(contacsFromSurvey?.data?.result);
        };
        getData();
    }, []);




    return (
        <div className="container">
            <button onClick={() => {
                navigate('/add')
            }}>Add Contact</button>
            {contacts.length > 0 ? contacts?.map((contact) => {
                return (
                    <div
                        key={contact._id}
                        className="contact"
                        onClick={() => {
                            navigate(`${contact._id}`)
                        }}>
                        <h2>{contact.name}</h2>
                        <button >Delete Contact</button>
                    </div>
                );
            }) : <h1>No Contacts Found</h1>}
        </div>
    );
}
export default ViewContacts;