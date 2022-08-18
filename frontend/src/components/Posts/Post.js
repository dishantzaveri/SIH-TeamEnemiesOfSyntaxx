import { Avatar } from '@material-ui/core';
import React, { forwardRef, useEffect } from 'react';
// import InputOption from '../Feed/InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useGetPostsQuery } from '../../features/feed/postSlice';
import { VscLoading } from 'react-icons/vsc';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const { data, isLoading, error } = useGetPostsQuery();
  function InputOption({ Icon, title, color }) {
    return <div className="inputOption">
      <Icon style={{ color: color}} />
      <h4>{title}</h4>
    </div>;
  };
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  console.log(data);

  return (
    <>
    {data && data.slice().reverse().map(post => (
      <div ref={ref} key={post.id} className="post">
        <div className="post_header">
          <Avatar src={photoUrl}></Avatar>
          <div className="postInfo">
            <h2>{post.owner}</h2>
            <p>{post.title}</p>

          </div>
        </div>
        <div className="post_body">
          {post.images_post && <img 
          src={post.images_post}
          alt="new" className='img'
          />}
          <p>{post.body}</p>
          {post.youtube_link && 
            <div>
              {/* <a target='_blank' className='text-blue-400' href={post.youtube_link}>{post.youtube_link}</a> */}
              <iframe width="100%" height="500" src={"https://www.youtube.com/embed/" + youtube_parser(post.youtube_link)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>}
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"  />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    ))}
    {
      isLoading && 
      <div className='w-full flex flex-col justify-center items-center my-8'>
        <VscLoading className='w-8 h-8 animate-spin text-center text-gray-600' />
        <h1 className='text-xl mt-2'>Loading...</h1>
      </div>
    }
</>
  );
});

export default Post;