import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteContact, getContacts } from "../api/contacts"

    const ViewContacts = () => {
        const navigate = useNavigate();
        const [contacts, setContacts] = useState([]);
        const [contactId , setContactId] = useState('')
        const [search,setSearch] = useState('')

        const handleDelete = async (contact_id) => {
            try {
                // const contact_id = contactId
                const res = await deleteContact(contact_id);
            } catch (error) {
                console.log(error);
            }

        };

        useEffect(() => {
            const getData = async () => {
                const contacsFromSurvey = await getContacts();
                setContacts(contacsFromSurvey?.data?.result);
            };
            getData();
        }, []);




        return (
            <div className="contacts-container">
                <button onClick={() => {
                    navigate('/add')
                }} >Add Contact</button>
                <input placeholder='Search...' onChange={(e)=>{setSearch(e.target.value)}} value={search} className="search"/>

                {contacts.length > 0 ? search.length>0?contacts?.filter(c=>c.email?.includes(search)).map((contact) =>(
                        <div
                            key={contact._id}
                            className="contact" >
                                
                            {// onClick={() => {
                            //     navigate(`${contact._id}`)
                            // }}>
                }
                            <h2>{contact.name}</h2>
                            <button onClick={(e)=>{
                                setContactId(e.target.value)
                                handleDelete(contact._id)
                            }} value={contact._id}>Delete Contact</button>
                        </div>
                    )
                ) : contacts?.map((contact) =>(
                        <div
                            key={contact._id}
                            className="contact" >
                                
                            {// onClick={() => {
                            //     navigate(`${contact._id}`)
                            // }}>
                }
                            <h2>{contact.name}</h2>
                            <button onClick={(e)=>{
                                setContactId(e.target.value)
                                handleDelete(contact._id)
                            }} value={contact._id}>Delete Contact</button>
                        </div>
                    )
                ) : <h1>No Contacts Found</h1>}
            </div>
        );
    }
    export default ViewContacts;