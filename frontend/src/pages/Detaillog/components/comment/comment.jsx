import React from 'react';

import './comment.less';

const Comment = () => {
    return (
        <div style={{ padding: '20px', background: '#fff' }}>
            <h2>用户评论</h2>
            {/* 在这里添加评论内容，可以使用普通的HTML元素和样式 */}
            <div>
                <p>用户A：这个地方很棒！</p>
                <p>用户B：我也觉得很不错。</p>
                {/* 可以继续添加其他评论内容 */}
            </div>
        </div>

    );
};

export default Comment;