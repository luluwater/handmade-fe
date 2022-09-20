import React from 'react'
import Map from '../components/Map/Map'
import { Row, Col } from 'react-bootstrap'
import MapSidebar from '../components/Map/MapSidebar'
import MapSearchBar from '../components/Map/MapSearchBar'

const MapSearch = () => {
  return (
    <>
      <MapSearchBar />
      <Row className="gx-0">
        <Col>
          <Map />
        </Col>
        <Col md={'auto'} className="bg-skin-bright">
          <MapSidebar />
        </Col>
      </Row>
    </>
  )
}

export default MapSearch
