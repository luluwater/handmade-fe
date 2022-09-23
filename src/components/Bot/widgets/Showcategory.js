import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const ShowCategory = () => {
  return (
    <div className="d-flex justify-content-around">
      <Link to="/">
        <Badge bg="secondary">New</Badge>
      </Link>
      <Link to="/">
        <Badge bg="secondary">New</Badge>
      </Link>
      <Link to="/">
        <Badge bg="secondary">New</Badge>
      </Link>
      <Link to="/">
        <Badge bg="secondary">New</Badge>
      </Link>
      <Link to="/">
        <Badge bg="secondary">New</Badge>
      </Link>
      <Link to="/">
        <Badge bg="secondary">New</Badge>
      </Link>
    </div>
  )
}

export default ShowCategory
