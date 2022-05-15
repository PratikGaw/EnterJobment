import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import"./css/post.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


const Post = forwardRef(({name, description,message,photoURL} ,ref)=> {
  return (
    <div className="posts" ref={ref}>
        <div className="post__header">
            <div className="post__headerLeft">
                <Avatar src={photoURL}/>
                <div className=" post_profile_details">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>

            </div>
            <MoreVertIcon/> 
        </div>
        <div className="post__body">
            <p>
               {message}
            </p>
        </div>
        <div className="post__footer">
            <div className="post__footer__opiion">
            <ThumbUpAltIcon/>
            <span>Like</span>
            </div>
            <div className="post__footer__opiion">
            <CommentIcon/>
            <span>Comment</span>
            </div>
            <div className="post__footer__opiion">
            <ShareIcon/>
            <span>Share</span>
            </div>
            <div className="post__footer__opiion">
            <SendIcon/>
            <span>Send</span>
            </div>
           
        </div>
    </div>
  )})

export default Post