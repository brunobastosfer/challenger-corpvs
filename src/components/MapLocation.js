import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import axios from 'axios';

export function MapLocation() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/search/posicoes/`)
    .then((res) => setUser(res.data))
    setLoading(false)
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <MapContainer center={[-3.74, -38.56]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          user.map((item) => { 
            return (
              <>
          <Marker position={[item.lat, item.long]}>
            <Popup>
              Fioravante
            </Popup>
          </Marker>
          </>
          )})
        }
      </MapContainer>
    </div>
  );
}
