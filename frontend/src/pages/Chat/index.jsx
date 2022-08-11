import React from 'react'
import Room from './Room'
import Sidebar from './Sidebar'

const Chat = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Room />
    </div>
  )
}

export default Chat