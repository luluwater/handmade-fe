import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { GeoJSON, Tooltip, Polyline } from 'react-leaflet'
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
import { color } from '@mui/system'
import { Link } from 'react-router-dom'

//全域事件
function LocationMarker() {
  const map = useMapEvents({
    popupopen(e) {
      // console.log(e.popup._latlng)
      map.flyTo(e.popup._latlng)
    },
  })
}
function getLineMULTILINESTRING(data) {
  let allPolyline = []
  const motify = data
    .replace('MULTILINESTRING(', '')
    .replace('))', ')')
    .split('),')
    .map((v) => v.replace('(', ''))
    .map((v) => v.replace(')', ''))
    .map((v) => v.split(','))
    .map((v) =>
      v.map((v2) => allPolyline.push([v2.split(' ')[1], v2.split(' ')[0]]))
    )
  // console.log('motify', motify)
  // console.log('allPolyline', allPolyline)
  return allPolyline
}

function getLineLINESTRING(data) {
  const motify = data
    .replace('LINESTRING(', '')
    .replace(')', '')
    .split(',')
    .map((v) => v.split(' '))
    .map((v) => [v[1], v[0]])
  // console.log('motify', motify)
  return motify
}

function getLineMULTILINESTRING_2(data) {
  let allPolyline = []
  const motify = data
    .replace('MULTILINESTRING(', '')
    .replace('))', ')')
    .split('),')
    .map((v) => v.replace('(', ''))
    .map((v) => v.replace(')', ''))
    .map((v) => v.split(','))
    .map((v) => {
      const temp = [...v[0]]
      v[0] = v[1]
      v[1] = v[0]
      return v
    })
    .map((v) => v.map((v2) => [v2.split(' ')[1], v2.split(' ')[0]]))
  // .map((v) =>
  //   v.map((v2) => allPolyline.push([v2.split(' ')[1], v2.split(' ')[0]]))
  // )
  // console.log('motify', motify)
  return motify
}

function Map() {
  const storeData = useSelector((state) => state.storeReducer.store)
  const center = useSelector((state) => state.storeReducer.center)
  const mrt_line = useSelector((state) => state.storeReducer.mrt_line)
  //default Marker Icon
  const defaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12.5, 0],
  })
  //default MRT Marker Icon
  const MRTIcon = Leaflet.icon({
    iconUrl: require('../../assets/mrt_icon.png'),
    iconSize: mrt_line != 'all' ? 20 : 15,
  })
  Leaflet.Marker.prototype.options.icon = defaultIcon

  useEffect(() => {
    markerRef.current?.openPopup()
  }, [center])

  const markerRef = useRef(null)

  //get mrt line lat lng array
  const BL_Line = getLineMULTILINESTRING(TRTC[0].Geometry)
  const BR_Line = getLineLINESTRING(TRTC[1].Geometry)
  const Y_Line = getLineLINESTRING(TRTC[5].Geometry)
  const G_Line = getLineMULTILINESTRING(TRTC[2].Geometry)
  const O_line = getLineMULTILINESTRING_2(TRTC[3].Geometry)
  const R_line = getLineMULTILINESTRING_2(TRTC[4].Geometry)

  const lineColor = (color) => {
    return { color: color, weight: 5 }
  }
  console.log(MRT)

  const mrtLineArr = [
    { pathOptions: lineColor('blue'), position: BL_Line, lineNo: 'BL' },
    { pathOptions: lineColor('brown'), position: BR_Line, lineNo: 'BR' },
    { pathOptions: lineColor('yellow'), position: Y_Line, lineNo: 'Y' },
    { pathOptions: lineColor('green'), position: G_Line, lineNo: 'G' },
    { pathOptions: lineColor('orange'), position: O_line, lineNo: 'O' },
    { pathOptions: lineColor('red'), position: R_line, lineNo: 'R' },
  ]

  return (
    <div id="map" className="border border-gray-dark map">
      <MapContainer
        center={[25.0478641, 121.5429378]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Polyline pathOptions={lineColor('blue')} positions={BL_Line} />
        <Polyline pathOptions={lineColor('brown')} positions={BR_Line} />
        <Polyline pathOptions={lineColor('yellow')} positions={Y_Line} />
        <Polyline pathOptions={lineColor('green')} positions={G_Line} />
        <Polyline pathOptions={lineColor('orange')} positions={O_line} />
        <Polyline pathOptions={lineColor('red')} positions={R_line} /> */}
        {mrtLineArr.map((v) => {
          if (mrt_line !== 'all' && v.lineNo !== mrt_line) return
          return (
            <Polyline
              key={v.lineNo}
              pathOptions={v.pathOptions}
              positions={v.position}
            />
          )
        })}

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
              zIndexOffset={20}
            >
              <Popup closeButton={false}>
                <Row className="align-items-center">
                  <Col sm={4} md={5}>
                    <Link to={`/store/${v.id}`}>
                      <img
                        className="border"
                        src={require(`../../assets/store/store_${v.category_en_name}_${v.id}/${v.img}`)}
                        alt={v.name}
                      />
                    </Link>
                  </Col>
                  <Col>
                    <h5 className="fw-bold">{v.name}</h5>
                    <p className="my-md-2 my-1">
                      <b>地址:</b>
                      {v.address}
                    </p>
                    <p className="my-md-2 my-1">
                      <b>電話:</b>
                      {v.phone}
                    </p>
                  </Col>
                </Row>

                <p className="line-clamp my-2">{v.intro}</p>
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
