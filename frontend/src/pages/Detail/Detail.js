import React, { useRef } from 'react';
import { Swiper } from 'antd-mobile';
import { Button } from 'antd-mobile'


const bannerList = [
  'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png',
  'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png',
  'https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png',
];

const items = bannerList.map((item, index) => (
  <Swiper.Item key={index}>
    <img src={item} alt='' />
  </Swiper.Item>
));

const BannerWithUserInfo = () => {
  return (
    <div>
      <Swiper loop autoplay>
        {items}
      </Swiper>
      <div style={{ padding: '20px', background: '#f5f5f5' }}>
        <h2>商品信息</h2>
        <p>这里可以放一些游记相关信息，比如地点、描述等。</p>
      </div>
      <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
        <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" alt="我的游记" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
        <div>
          <h3>我的游记</h3>
          <p>日期：2024-03-27</p>
        </div>
        <Button style={{ marginLeft: 'auto' }} color='primary'>关注</Button>
      </div>
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
            <div style={{ padding: '20px', background: '#f5f5f5' }}>
        <h2>详细内容</h2>
        <p>在这里添加本次旅游的详细描述内容。</p>
      </div>
      <div style={{ padding: '20px', background: '#fff' }}>
        <h2>用户评论</h2>
        {/* 在这里添加评论内容，可以使用普通的HTML元素和样式 */}
        <div>
          <p>用户A：这个地方很棒！</p>
          <p>用户B：我也觉得很不错。</p>
          {/* 可以继续添加其他评论内容 */}
        </div>
      </div>

    </div>
  );
};

export default BannerWithUserInfo;