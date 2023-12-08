import React from 'react';
import './Post.css'; 

const Post = ({ title, description, imageUrl, likeCount }) => {
    return (
        <div className="post-card">
            <div className="post-image-container">
                <img src={imageUrl} alt={title} className="post-image" />
            </div>
            <div className="post-content">
                <h3 className="post-title">{title}</h3>
                <p className="post-description">{description}</p>
                <div className="post-interaction">
                    <img className="heart-icon" src="https://cdn-icons-png.flaticon.com/256/60/60993.png"></img>
                    <span className="like-count">{likeCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;