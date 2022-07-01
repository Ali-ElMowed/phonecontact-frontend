import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteContact, getContacts } from "../api/contacts"

const ViewContacts = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')

    const handleDelete = async (id) => {
        try {
            const res = await deleteContact(id).then(() => {
                getData()
            })
        } catch (error) {
            console.log(error);
        }

    };
    const getData = async () => {
        const contacsFromSurvey = await getContacts();
        setContacts(contacsFromSurvey?.data?.result);
    };
    useEffect(() => {
        getData();
    }, []);




    return (
        <div className="contacts-container">
            <button onClick={() => {
                navigate('/add')
            }} >Add Contact</button>
            <input placeholder='Search...' onChange={(e) => { setSearch(e.target.value) }} value={search} className="search" />

            {contacts.length > 0 ? search.length > 0 ? contacts?.filter(c => c.email?.includes(search)).map((contact) => (
                <div
                    key={contact._id}
                    className="contact"
                >

                    <h2>{contact.name}</h2>
                    <button
                        onClick={() => { handleDelete(contact._id) }}
                        value={contact._id}>
                        Delete Contact
                    </button>
                </div>
            )
            ) : contacts?.map((contact) => (
                <div
                    key={contact._id}
                    className="contact"

                >

                    <h2 onClick={() => {
                        navigate(`/contact/${contact._id}`)
                    }} >{contact.name}</h2>
                    <button onClick={() => { handleDelete(contact._id) }
                        // setContactId(e.target.value)

                    } value={contact._id}>Delete Contact</button>
                </div>
            )
            ) : <h1>No Contacts Found</h1>}
        </div>
    );
}
export default ViewContacts;