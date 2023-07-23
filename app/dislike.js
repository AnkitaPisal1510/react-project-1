import React from 'react';

const LikeDislikeComponent = ({ count, onLike, onDislike }) => {
  return (
    <div>
      <div>
        <img className="like" src="Icon - Like.svg" onClick={onLike}/>
        <div className="count">{count}</div>
    	<img className="dislike" src="dislike.svg" onClick={onDislike} />
      </div>
    </div>
  );
};

export default LikeDislikeComponent;

