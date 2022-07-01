import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { login } from "../api/auth";
import { addContact } from "../api/contacts";
import { set } from "../app/slices/user";
import Map from "../components/Map";

const AddContact = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [relation, setRelation] = useState('')
    const [pos, setPos] = useState({ lat: 51.505, lng: -0.09 })
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleAdd = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user')).user
            const data = { name, email, "relation_status": relation, lng: pos.lng, lat: pos.lat, "phone_number": phone, user }
            const res = await addContact(data);
            navigate('/')
        } catch (error) {
            console.log(error);
        }

    };



    return (
        <div className="addContact">
            <input placeholder="Name" type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
            <input placeholder="Phone" type="number" onChange={(e) => { setPhone(e.target.value) }} value={phone} />
            <input placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <input placeholder="Relation" type="text" onChange={(e) => { setRelation(e.target.value) }} value={relation} />
            <Map pos={pos} setPos={setPos} className="map" />
            <button onClick={handleAdd}>Add</button>
        </div>
    )


}

export default AddContact;