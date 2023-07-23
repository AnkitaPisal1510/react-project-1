"use client"
import React, { useState } from 'react';
import LikeDislikeComponent from './dislike.js';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  const handleDislike = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <LikeDislikeComponent
        count={count}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </div>
  );
};

export default ParentComponent;


