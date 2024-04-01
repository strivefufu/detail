import React from 'react';

import './comment.css';

const Comment = () => {
    return (
        <div className="commentsWrapper">
        <div className="header">
          <h2>用户评论</h2>
        </div>
        <div className="comments">
          <div className="comment">
            <p>用户A：这个地方很棒！</p>
          </div>
          <div className="comment">
            <p>用户B：我也觉得很不错。</p>
          </div>
          {/* 可以继续添加其他评论内容 */}
        </div>
      </div>

    );
};

export default Comment;