// src/components/Marcadores/index.jsx
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

export function Marcadores({ locais }) {
  const map = useMap()

  useEffect(() => {
    if (locais.length > 0) {
      const primeiroLocalDaLista = locais[0]

      map.flyTo(
        {
          lat: primeiroLocalDaLista.localizacao.latitude,
          lng: primeiroLocalDaLista.localizacao.longitude,
        },
        13,
        { animate: true },
      )
    }
  }, [locais, map])

  return (
    <>
      {locais.map((local) => (
        <Marker
          key={local.nome}
          position={[local.localizacao.latitude, local.localizacao.longitude]}
        >
          <Popup>
            <strong>{local.nome}</strong>
            <p>{local.descricao}</p>
            {/* <button onClick={() => alert('ok')}>Ver local</button> */}
          </Popup>
        </Marker>
      ))}
    </>
  )
}

Marcadores.propTypes = {
  locais: PropTypes.array,
}