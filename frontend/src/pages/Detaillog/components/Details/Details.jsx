import React from 'react';  
import { Button } from 'antd-mobile'
import  "./Details.css"

const Details = () => {  
  return (  
      <div className="contain2">
        <img className="imager" src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" alt="我的游记" />
        <div className="info">
          <h3>我的游记</h3>
          <p>日期：2024-03-27</p>
        </div>
        <Button className="button1" color='primary'>关注</Button>
      </div>

  );  
};  
  
export default Details;