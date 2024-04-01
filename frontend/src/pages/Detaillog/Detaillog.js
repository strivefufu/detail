import React from 'react';  
import SwiperN from './components/Swiper/Swiper';  
import UserInfo from './components/UserInfo/UserInfo';  
import Details from './components/Details/Details';  
import Content from './components/content/content'
import Comment from './components/comment/comment'

  
const Detaillog = () => {  
  return (  
    <div className="banner-with-user-info-container">  
      <SwiperN />  
      <UserInfo />  
      <Details />  
      <Content/>
      <Comment/>
    </div>  
  );  
};  
  
export default Detaillog;
