import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Posts/Post';
// import { db } from '../../../firebase';
// import firebase from 'firebase';
import { useSelector } from 'react-redux';
// import { selectUser } from '../../../features/userSlice';
import FlipMove from 'react-flip-move';
import CreatePosts from '../CreatePosts/CreatePosts';
import News from '../News/News';

function Feed() {
//   const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
//       setPosts(snapshot.docs.map(doc => (
//         {
//           id: doc.id,
//           data: doc.data(),
//         }
//       )))
//     ))
//   }, [])
  
//   const sendPost = e => {
//     e.preventDefault();

//     // db.collection("posts").add({
//     //   name: user.displayName,
//     //   description: user.email,
//     //   message: input,
//     //   photoUrl: user.photoUrl || '',
//     //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     // });
//     setInput("");
//   };
  function InputOption({ Icon, title, color }) {
    return <div className="inputOption">
      <Icon style={{ color: color}} />
      <h4>{title}</h4>
    </div>;
  };

  return (
    <div className='grid grid-cols-12 p-8 gap-8'>
      <div className="feed col-span-8">
        <div className="feed_inputContainer">
          
        <CreatePosts />
          
        </div>
        <FlipMove>
      
          {/* {posts.slice(0, 5).map(({ id, data: { name, description, message, photoUrl}}) => ( */}
            <Post 
              // key="1"
              // name="Greha"
              // description="Here is my desc"
              // message="This is my message"
              // photoUrl={photoUrl}
            />
          {/* ))} */}
        </FlipMove>
    
      </div>
      <div className='col-span-4'>
        <News />
      </div>
    </div>
  );
};

export default Feed;