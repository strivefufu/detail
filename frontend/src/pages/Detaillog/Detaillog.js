import React from 'react'
import Swiper from './components/swiper/myswiper'
import Restinfo from "./components/restinfo/restinfo"
import Usercomment from './components/usercomment/usercomment'

const data = [
  'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png',
  'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png',
  'https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png',
];

<Swiper loop autoplay>
{datas}
</Swiper>

const Food = () => {
  return (

      <div>
      <Swiper data={data}/>
      <Restinfo />
      <Usercomment />
    </div>
  )
}

export default Food