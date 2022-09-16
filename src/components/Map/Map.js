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
import { useMapEvents } from 'react-leaflet'
import { useEffect, useRef } from 'react'

//全域事件
function LocationMarker() {
  const map = useMapEvents({
    popupopen(e) {
      console.log(e.popup._latlng)
      map.flyTo(e.popup._latlng)
    },
  })
}

function Map() {
  //marker defaultIcon
  const defaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12.5, 0],
  })
  Leaflet.Marker.prototype.options.icon = defaultIcon

  const storeData = useSelector((state) => state.storeReducer.store)
  const center = useSelector((state) => state.storeReducer.center)
  console.log('map', storeData)
  useEffect(() => {
    markerRef.current?.openPopup()
  }, [center])

  const markerRef = useRef(null)
  return (
    <div className="border border-gray-dark map">
      {/* <button
        onClick={() => {
          markerRef.current.openPopup()
        }}
      >
        132456798
      </button> */}
      <MapContainer
        center={[25.0478641, 121.5429378]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {storeData?.map((v) => {
          return (
            <Marker
              key={v.id}
              position={[v.store_lat, v.store_lng]}
              ref={
                v.store_lat === center[0] && v.store_lng === center[1]
                  ? markerRef
                  : null
              }
            >
              <Popup closeButton={false}>
                <Row className="align-items-center">
                  <Col sm={5}>
                    <img
                      className="border"
                      src={require(`../../assets/store/store_${v.category_en_name}_${v.id}/${v.img}`)}
                      alt={v.name}
                    />
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

                <p className="line-clamp">{v.intro}</p>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default Map
