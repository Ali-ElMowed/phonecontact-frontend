import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

function Map({pos,setPos}) {


  const LocatedMarker = ()=>{
  const map = useMapEvents({

    click() {
      map.locate()
    },
    locationfound(e) {
      setPos(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })


  return pos === null ? null : (
    <Marker position={pos}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

  return (
    <div>
      <div>
      langitude:
      <input  value={pos.lng} onChange={(e)=>{setPos(old=>{return {...old,lng:e.target.value}})}} className="lan"/>
      </div>
      <div>
      latitude:
      <input value={pos.lat} onChange={(e)=>{setPos(old=>{return {...old,lat:e.target.value}})}} className="lat"/>
      </div>
      Click on map to get current location
      <MapContainer style={{height:300}} center={{ lat: 51.505, lng: -0.09 }} zoom={25} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocatedMarker/>
      </MapContainer>
    </div>
  );
}

export default Map;