import React from 'react';  
import { Button } from 'antd-mobile'
import './Details.less'; 
  
const Details = () => {  
  return (  
      <div className="contain"style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
        <img className="imger"src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" alt="我的游记" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
        <div>
          <h3>我的游记</h3>
          <p>日期：2024-03-27</p>
        </div>
        <Button style={{ marginLeft: 'auto' }} color='primary'>关注</Button>
      </div>

  );  
};  
  
export default Details;