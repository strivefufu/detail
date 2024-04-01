import React from 'react';  

import './content.css'; 
  
const Content = () => {  
  return (  
    <div className="contentWrapper">
      <div className="headerRow">
        <div className="cell">出发时间</div>
        <div className="cell">人均费用</div>
        <div className="cell">人物</div>
        <div className="cell">出行天数</div>
      </div>
      <div className="dataRow">
        <div className="cell">2024-04-01</div>
        <div className="cell">¥1000</div>
        <div className="cell">小组游</div>
        <div className="cell">5天</div>
      </div>
    </div>
  );  
};  
  
export default Content;