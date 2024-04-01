import React from 'react';  

import './content.less'; 
  
const Content = () => {  
  return (  
    <div style={{ padding: '20px', background: '#f2f2f2' }}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, textAlign: 'center' }}>出发时间</div>
      <div style={{ flex: 1, textAlign: 'center' }}>人均费用</div>
      <div style={{ flex: 1, textAlign: 'center' }}>人物</div>
      <div style={{ flex: 1, textAlign: 'center' }}>出行天数</div>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, textAlign: 'center' }}>2024-04-01</div>
      <div style={{ flex: 1, textAlign: 'center' }}>¥1000</div>
      <div style={{ flex: 1, textAlign: 'center' }}>小组游</div>
      <div style={{ flex: 1, textAlign: 'center' }}>5天</div>
    </div>
  </div>
  );  
};  
  
export default Content;