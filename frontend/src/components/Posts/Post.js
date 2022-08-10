import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
// import InputOption from '../Feed/InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  function InputOption({ Icon, title, color }) {
    return <div className="inputOption">
      <Icon style={{ color: color}} />
      <h4>{title}</h4>
    </div>;
  };
  
  return (
    <>
    <div ref={ref} className="post">
        <div className="post_header">
          <Avatar src={photoUrl}></Avatar>
          <div className="postInfo">
            <h2>Greha Shah</h2>
            <p>I am a Frontend Developer and dedicated student</p>

          </div>
        </div>
        <div className="post_body">
        <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=250"
      alt="new" className='img'
      />
          <p>Here is my message line 1 I am a Frontend Developer and dedicated student </p>
          <p>Here is my message line 2 I am a Frontend Developer and dedicated student </p>
          <p>Here is my message line 3 I am a Frontend Developer and dedicated student </p>
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"  />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
    </div>
     <div ref={ref} className="post">
     <div className="post_header">
       <Avatar src={photoUrl}></Avatar>
       <div className="postInfo">
         <h2>Greha Shah</h2>
         <p>Here is my Description</p>
         <p>Here is my Description</p>
       </div>
     </div>
     <div className="post_body">
      <img src="https://www.picamon.com/wp-content/uploads/2020/10/Picamon-northern-lights-0-5f8b42955e1ad"
      alt="old" className='img'
      />
       <p>Here is my message line 1 </p>
       <p>Here is my message line 2 </p>
     </div>
     <div className="post_buttons">
       <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
       <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
       <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
       <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
     </div>
 </div>
  <div ref={ref} className="post">
  <div className="post_header">
    <Avatar src={photoUrl}></Avatar>
    <div className="postInfo">
      <h2>Greha Shah</h2>
      <p>Here is my Description</p>
      <p>Here is my Description</p>
    </div>
  </div>
  
  <div className="post_body">
    <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=450"
      alt="new" className='img'
      />
    <p>Here is my message line 1 </p>
    <p>Here is my message line 2 </p>
  </div>
  <div className="post_buttons">
    <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
    <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
    <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
    <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
  </div>
</div>
</>
  );
});

export default Post;