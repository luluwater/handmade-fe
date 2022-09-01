import React from 'react'
import Map from '../components/Map/Map'
import { Row, Col } from 'react-bootstrap'
import MapSidebar from '../components/Map/MapSidebar'

const MapSearch = () => {
  return (
    <>
      <Row className="gx-0">
        <Col>
          <Map />
        </Col>
        <Col sm={'auto'} className="bg-secondary">
          <MapSidebar />
        </Col>
      </Row>
    </>
  )
}

export default MapSearch
