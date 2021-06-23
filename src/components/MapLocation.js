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
    </div>
  );
}
