import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { collection, doc, getDoc, setDoc, onSnapshot, query, where, getDocs } from "firebase/firestore"; 

const ChatTile = () => {
  return (
    <div className='w-full flex items-center gap-4 px-4 py-3 bg-gray-50 border-b border-gray-100 hover:bg-purple-gray-100'>
      <Avatar />
      <div className="">
        <h1 className="font-semibold">Name</h1>
        <h1 className="text-xs text-gray-700">Message</h1>
      </div>
    </div>
  )
}


const Sidebar = () => {
  const { db } = useSelector(state => state.firebase)
  const [users, setUsers] = useState([])
  useEffect(() => async() => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }, [])
  
  return (
    <div className='w-1/4 h-screen bg-gray-50'>
      <div className="px-6 py-4 bg-purple-gray-100">
        <h1 className="text-3xl font-bold mb-4">Messages</h1>
        <div className="flex items-center w-full my-2 p-1 bg-white rounded-full">
          <MdSearch className='text-xl m-2' />
          <input placeholder='Search chat' className='focus:outline-none grow bg-inherit mr-2' type="text" />
        </div>
      </div>
      <ChatTile />
      <ChatTile />
      <ChatTile />
    </div>
  )
}

export default Sidebar