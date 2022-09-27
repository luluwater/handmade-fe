import React from 'react'
import IMG from '../assets/NotFound.jpg'

const NoFound = () => {
  return (
    <>
      <h1
        className="text-center text-white fw-bold"
        style={{ position: 'relative', top: '150px' }}
      >
        Not Found Page
      </h1>
      <img className="w-100" src={IMG} alt="notfound" />
    </>
  )
}

export default NoFound
