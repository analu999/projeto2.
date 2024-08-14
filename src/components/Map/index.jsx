// // src/components/Map/index.jsx (com locais)
// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import styles from './styles.module.css'

// export default function Map({ locations }) {
//   const [center, setCenter] = useState([0, 0]);

//   useEffect(() => {
//     if (locations.length > 0) {
//       const { latitude, longitude } = locations[0].localizacao;
//       setCenter([latitude, longitude]);
//     }
//   }, [locations]);

//   return (
//     <div className={styles.mapContainer}>
//       <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {locations.map((location) => (
//           <Marker key={location.id} position={[location.localizacao.latitude, location.localizacao.longitude]}>
//             <Popup>
//               <div>
//                 <strong>{location.nome_do_local}</strong>
//                 <br />
//                 {location.descricao}
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// src/components/Map/index.jsx 
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09]

function Map() {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;