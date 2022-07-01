import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "../api/contacts";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const ContactPage = () => {
    const { id } = useParams();

    const [contact, setContact] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const contactById = await getContactById(id)
                setContact(contactById?.data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    return (
        <div>
            {contact ? <>
                <div className="contact-name">{contact?.name}</div>
                <div className="contact-phone">{contact?.phone_number}</div>
                <div className="contact-email">{contact?.email}</div>
                <div className="contact-relation">{contact?.relation_status}</div>
                <MapContainer style={{ height: 300 }} center={{ lat: contact?.lat, lng: contact?.lng }} zoom={25} scrollWheelZoom={false} className="map">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={{ lat: contact?.lat, lng: contact?.lng }}>
                        <Popup>{contact?.name} is here</Popup>
                    </Marker>
                </MapContainer></> : <h1>Loading....</h1>}
        </div>
    )
}

export default ContactPage;