import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { GeoJSON, Tooltip } from 'react-leaflet'
import Leaflet from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { useMapEvents } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './Map.scss'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { useEffect, useRef } from 'react'
import MRT from '../../utils/TRTC-Station.json'
import MRT_Line from '../../utils/TRTC-Line.json'
import TRTC from '../../utils/TRTC.json'

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
  const storeData = useSelector((state) => state.storeReducer.store)
  const center = useSelector((state) => state.storeReducer.center)
  const category = useSelector((state) => state.storeReducer.category)
  const mrt_line = useSelector((state) => state.storeReducer.mrt_line)
  //default Marker Icon
  const defaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12.5, 0],
  })
  //default MRT Marker Icon
  const MRTIcon = Leaflet.icon({
    iconUrl:
      'https://www.newton.com.tw/img/4/eed/nBnauUmYyQTZzQmY4QWOxEGMkhDNzUTYidTZxgTNxQmM4MWOlR2MilDMwQ2LtVGdp9yYpB3LltWahJ2Lt92YuUHZpFmYuMmczdWbp9yL6MHc0RHa.jpg',
    iconSize: mrt_line != 'all' ? 25 : 20,
  })
  Leaflet.Marker.prototype.options.icon = defaultIcon

  useEffect(() => {
    markerRef.current?.openPopup()
  }, [center])

  const markerRef = useRef(null)
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
        <LocationMarker />
        {/* <GeoJSON key="Geometry" data={test} /> */}
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
              zIndexOffset={1000}
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

        {MRT.map((v, i) => {
          if (
            mrt_line !== 'all' &&
            v.StationID.substring(0, mrt_line.length) !== mrt_line
          )
            return
          return (
            <Marker
              key={i}
              position={[
                v.StationPosition.PositionLat,
                v.StationPosition.PositionLon,
              ]}
              icon={MRTIcon}
            >
              <Tooltip direction={'top'}>{v.StationName.Zh_tw}</Tooltip>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default Map
