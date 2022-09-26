import React from 'react'
import Map from '../components/Map/Map'
import { Row, Col } from 'react-bootstrap'
import MapSidebar from '../components/Map/MapSidebar'
import MapSearchBar from '../components/Map/MapSearchBar'

const MapSearch = () => {
  return (
    <>
      <MapSearchBar />
      <Row className="map_container gx-2">
        <Col>
          <Map />
        </Col>
        <Col md={'auto'}>
          <MapSidebar />
        </Col>
      </Row>
    </>
  )
}

export default MapSearch
