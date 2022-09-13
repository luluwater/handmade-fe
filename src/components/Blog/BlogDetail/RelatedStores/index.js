import React from 'react'
import { useGetStoreQuery } from '../../../../services/storeApi'

const RelatedStores = ({
  name,
  intro,
  address,
  route,
  phone,
  opening_hour,
  storeId,
}) => {
  const { data } = useGetStoreQuery()
  const currentStore = data?.filter((store) => store.id === storeId)
  const imgName = currentStore?.[0]?.kv_name[0]
  console.log(imgName)

  if (imgName) {
    return (
      <>
        <div className="text-center mt-9 mb-4 fs-3 d-none d-md-block">
          / <spna class="mx-2">相關店家 </spna>/
        </div>
        <div className="bg-skin-bright d-lg-flex mx-6 py-5 px-3 px-md-10 gap-6  mb-7">
          <div className="position-relative">
            <img
              className="h-100 mb-5"
              src={require(`../../../../assets/store/store_metalwork_3/${imgName}`)}
              alt="store "
            />
            <h5 class="position-absolute top-50 start-50 translate-middle text-white fs-2">
              {name}
            </h5>
          </div>
          <div className="max-w-md-65">
            <div className="my-3 text-cut">{intro}</div>
            <p>地址：{address}</p>
            <p>交通方式：{route}</p>
            <p>連絡電話：{phone}</p>
            <p>營業時間：{opening_hour}</p>
          </div>
        </div>
      </>
    )
  }
}

export default RelatedStores
