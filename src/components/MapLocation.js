import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import axios from 'axios';

import { getMarkerIcon } from '../iconPersonal/createIcon';

export function MapLocation() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = 
  ["","Pikachu", "Bulbasaur", "Chikorita", "Squirtle", "Caterpie", "Metapode", "Butterfree", "Weedle", "Pidgeot", "Charmander"]

  useEffect(() => {
    axios.get(`/api/search/posicoes/`)
    .then((res) => setUser(res.data))
    setLoading(false)
  }, [user])

  return (
    <div>
      {
        loading 
        ?
        (<span>Carregando...</span>)
        :
        (<MapContainer center={[-3.74, -38.56]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            user.map((item, index) => { 
              return (
            <>
              <Marker position={[item.lat, item.long]} icon={getMarkerIcon()}>
                <Popup>
                  {username[index]}
                </Popup>
              </Marker>
            </>
            )})
          }
        </MapContainer>)
      }
    </div>
  );
}
