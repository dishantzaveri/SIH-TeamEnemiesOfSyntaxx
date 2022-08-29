import { Avatar } from "@material-ui/core";
import React, { forwardRef, useEffect, useState } from "react";
// import InputOption from '../Feed/InputOption';
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { useGetPostsQuery } from "../../features/feed/postAPISlice";
import { VscLoading } from "react-icons/vsc";
import axios from "axios";
import { useSelector } from "react-redux";

const CommentBody = ({comment, comments}) => {
  const {token} = useSelector(state => state.auth)
  const [body, setBody] = useState('')
  const [list, setList] = useState([])
  console.log(comment, comments);
  const getComments = comment => {
    var config = {
      method: 'get',
      url: 'https://vismayvora.pythonanywhere.com/api/comments/'+comment+'/',
      headers: { 
        'Authorization': 'Token '+token,
      },
      data : ''
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setList(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const postComment = () => {
    var data = new FormData();
    data.append('body', body);
    data.append('post', comment);

    var config = {
      method: 'post',
      url: 'https://vismayvora.pythonanywhere.com/api/comments/',
      headers: { 
        'Authorization': 'Token '+token, 
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      setList(prevState => [...prevState, response.data])
      setBody('')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
    getComments(comment)
  }, [])

  const Tile = ({item}) => {
    return(
      <div className="w-full border-t p-2">
        <h1 className="">{item.body}</h1>
        <h1 className="text-xs text-gray-400">by {item.owner}</h1>
      </div>
    )
  }
  
  return (
    <div className="p-2">
      <div className="flex w-full">
        <input className='px-3 py-2 grow border' placeholder='Enter Comment' value={body} onChange={e => setBody(e.target.value)} type="text" />
        <button className='px-3 py-2 bg-purple-gray-700' onClick={() => postComment()}>add</button>
      </div>
      <h1 className="p-2 text-lg font-semibold">Comments:</h1>
      {list.map(item => <Tile item={item} />)}
    </div>
  )
}

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const {token} = useSelector(state => state.auth)
  const [data, setData] = useState([])
  const [liked, setLiked] = useState(false)
  const [likedId, setLikedId] = useState(null)
  const [comments, setComments] = useState(null)
  const like = id => {
    var data = new FormData();
    data.append('group_post', id);
    console.log(id)
    var config = {
      method: 'post',
      url: 'https://vismayvora.pythonanywhere.com/api/post-like/',
      headers: { 
        'Authorization': 'Token '+token, 
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setLikedId(response.data.id)
      getPosts()
      setLiked(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const dislike = () => {
    var config = {
      method: 'delete',
      url: 'https://vismayvora.pythonanywhere.com/api/post-like/'+likedId,
      headers: { 
        'Authorization': 'Token '+token, 
      },
      data : data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getPosts()
        setLiked(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  const getPosts = () => {
    var config = {
      method: 'get',
      url: 'https://vismayvora.pythonanywhere.com/api/posts/',
      headers: { 
        'Authorization': 'Token '+token, 
      },
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
    getPosts()
  } , [])
  function InputLikeOption({ Icon, title, color, id }) {
    return (
      <div className="inputOption" onClick={() => liked ? dislike() : like(id)} >
        <Icon style={{ color: color }} />
        <h4>{title}</h4>
      </div>
    );
  }
  function InputCommentOption({ Icon, title, color, id }) {
    return (
      <div className="inputOption" onClick={() => comments===id ? setComments(null) : setComments(id)}>
        <Icon style={{ color: color }} />
        <h4>{title}</h4>
      </div>
    );
  }
  function youtube_parser(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }

  const Post = ({post}) => {
    return(
      <div ref={ref} key={post.id} className="post shadow-xl">
        <div className="post_header items-center gap-4 p-3 border-b">
          <Avatar src={photoUrl}></Avatar>
          <div className="">
            <h2 className="text-xl font-semibold">{post.owner}</h2>
            {/* <p className="text-xs text-gray-600">{post.title}</p> */}
          </div>
        </div>
        <div className="post_body px-4">
          <p>{post.body}</p>
          {post.images_post && (
            <img src={post.images_post} alt="new" className="img" />
          )}
          {post.youtube_link && (
            <div className="mt-2">
              <iframe
                width="100%"
                height="500"
                src={
                  "https://www.youtube.com/embed/" +
                  youtube_parser(post.youtube_link)
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
        <div className="px-4 flex justify-between text-xs mb-1">
          <h1>{post.like_on_post_count} likes</h1>
          <h1>{post.comment_on_post_count} comments</h1>
        </div>
        <div className="post_buttons pb-3 border-t">
          <InputLikeOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color={liked ? 'red' : "gray"}
            id={post.id}
          />
          <InputCommentOption
            Icon={ChatOutlinedIcon}
            title="Comment"
            color="gray"
            id={post.id}
          />
        </div>
        {comments===post.id && <CommentBody comment={post.id} comments={comments}/>}
      </div>
    )
  }

  return (
    <>
      {data &&
        data
          .slice()
          .reverse()
          .map((post) => (
            <Post post={post} />
          ))
      }
      {!(data===[]) && (
        <div className="w-full flex flex-col justify-center items-center my-8">
          <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
          <h1 className="text-xl mt-2">Loading...</h1>
        </div>
      )}
    </>
  );
});

export default Post;
