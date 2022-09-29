import React, { useEffect, useState } from 'react'

const CatPicture = () => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message)
      })
  }, [])

  return (
    <div>
      <img src={imageUrl} alt="XIO HUA MAO" />
    </div>
  )
}

export default CatPicture
