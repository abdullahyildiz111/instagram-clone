import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

function Post({username,imageURL, caption}) {
    

    return (
        <div className="post">
            <div className="post__header">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="post__avatar" />
                <h3 > {username} </h3>
            </div>
            <img className="post__img" src={imageURL} alt=""></img>
            <h4 className="post__text" >  <strong>{username} </strong>{caption} </h4>
        </div>
    )
}

export default Post
