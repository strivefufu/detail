import React from 'react';
import { Swiper } from 'antd-mobile';
import './Swiper.less';

const bannerList = [
    'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png',
    'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png',
    'https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png',];  

const items = bannerList.map((item, index) => (
  <Swiper.Item key={index}>
    <img src={item} alt='' />
  </Swiper.Item>
));

const SwiperN = ()=>{
    return (
        <Swiper loop autoplay className="banner-container">
            {items}
        </Swiper>
    )}

export default SwiperN;