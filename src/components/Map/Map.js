import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import Leaflet from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

import 'leaflet/dist/leaflet.css'
import './Map.scss'
import { useSelector } from 'react-redux'
import StoreCard from './StoreCard'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'

function Map() {
  const defaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12.5, 0],
  })
  Leaflet.Marker.prototype.options.icon = defaultIcon

  const [storeData] = useSelector((state) => state.storeReducer.store)
  console.log('map', storeData)
  return (
    <div className="border border-gray-dark map">
      <MapContainer
        center={[25.0478641, 121.5429378]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {storeData?.map((v) => {
          return (
            <Marker key={v.id} position={[v.store_lat, v.store_lng]}>
              <Popup>
                <Row className="align-items-center">
                  <Col sm={'auto'}>
                    <div
                      style={{ width: '80px', height: '80px' }}
                      className="border"
                    ></div>
                  </Col>
                  <Col>
                    <h5 className="fw-bold">{v.name}</h5>
                    <p className="my-2">
                      <b>地址:</b>
                      {v.address}
                    </p>
                    <p className="my-2">
                      <b>電話:</b>
                      {v.phone}
                    </p>
                  </Col>
                </Row>

                <p>{v.intro}</p>
                {/* <StoreCard
                    key={v.id}
                    name={v.name}
                    intro={v.intro}
                    address={v.address}
                    phone={v.phone}
                    openingHour={v.opening_hour}
                    fbUrl={v.FB_url}
                    igUrl={v.IG_url}
                    lng={v.store_lng}
                    lat={v.store_lat}
                  ></StoreCard> */}
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default Map
