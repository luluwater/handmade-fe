import React from 'react'

const RelatedStores = ({
  name,
  intro,
  address,
  route,
  phone,
  opening_hour,
  storeImg,
}) => {
  return (
    <div>
      <div className="text-center mt-9 mb-4 fs-3 d-none d-md-block">
        / <spna class="mx-2">詳細資訊</spna>/
      </div>
      <div className="bg-skin-bright d-lg-flex mx-6 py-5 px-3 px-md-10 gap-6 mb-7 justify-content-around">
        <div className="position-relative">
          <img src={storeImg} className=" max-h-md-300" alt="store " />
        </div>
        <div className="max-w-md-65">
          <div className="my-3 text-cut">{intro}</div>
          <p>地址：{address}</p>
          <p>交通方式：{route}</p>
          <p>連絡電話：{phone}</p>
          <p>營業時間：{opening_hour}</p>
        </div>
      </div>
    </div>
  )
}

export default RelatedStores
