import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ContactPage = ()=> {
    const {id} = useParams();
    const [contactContect , setContactContect] = useState([]);

    const getContent = async ()=> {
        const res = await fetch("http://localhost:3000/api/contact/getContacts",{
            method:"POST",
            headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                _id:"62b5ed6c2a0024dfaddfa1a3"
              }),
        });
        const data = res.json();
        return data
    }

    useEffect(()=>{
        const getData = async ()=>{
            const contactContentS = await getContent();
            setContactContect(contactContentS);
        };
        getData()
        console.log(getData);
    },[]);


}

export default ContactPage;