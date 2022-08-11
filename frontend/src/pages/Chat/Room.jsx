import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { MdInsertEmoticon, MdMic } from 'react-icons/md'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const Header = () => {
  return (
    <div className="w-full items-center gap-4 flex px-4 py-3 bg-purple-gray-100 border-b">
      <Avatar />
      <div className="">
        <h1 className="font-semibold">Name</h1>
        <h1 className="text-xs text-gray-700">time</h1>
      </div>
    </div>
  )
}

const ChatReceived = () => {
  return (
    <div className="py-3 px-4 w-fit bg-blue-50 max-w-[70%] min-w-[100px] rounded-3xl border">
      <h1 className="">hi</h1>
      <h1 className="text-xs text-gray-700 text-end font-thin">time</h1>
    </div>
  )
}

const ChatSend = () => {
  return (
    <div className="py-3 px-4 w-fit bg-green-50 max-w-[70%] min-w-[100px] rounded-3xl border ml-auto">
      <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad, nostrum itaque dicta enim repellat. Mollitia possimus distinctio non ipsam inventore veritatis aspernatur, sapiente assumenda tempora eos necessitatibus soluta voluptatum!</h1>
      <h1 className="text-xs text-gray-700 text-end font-thin">time</h1>
    </div>
  )
}

const Chats = () => {
  return (
    <div className="p-4 grow flex flex-col gap-2 overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-purple-gray-700 scrollbar-track-purple-gray-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <ChatReceived />
      <ChatSend />
      <ChatReceived />
      <ChatReceived />
      <ChatSend />
      <ChatReceived />
      <ChatReceived />
      <ChatSend />
      <ChatReceived />
      <ChatReceived />
      <ChatSend />
      <ChatReceived />
    </div>
  )
}

const Input = () => {
  const [input, setInput] = useState('')
  const [open, setOpen] = useState(false)
  const onEmojiClick = (event, emojiObject) => {
    setInput(prevState => prevState + emojiObject.emoji);
  };
  const sendMessage = e => {
    e.preventDefault()
    console.log("you typed >>> " + input)
    setInput('')
  }
  return (
    <form className="w-full bg-purple-gray-100 p-4 flex items-center gap-4" onSubmit={e => sendMessage(e)}>
      {open && (
        <div className="absolute bottom-[70px]">
          <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} />
        </div>
      )}
      <MdInsertEmoticon onClick={() => setOpen(prevState => !prevState)} className='text-3xl cursor-pointer' />
      <input value={input} onChange={e => setInput(e.target.value)} className='grow rounded-full focus:outline-none px-4 py-2' type="text" />
      {/* <MdMic className='text-3xl cursor-pointer' /> */}
    </form>
  )
}

const Room = () => {
  return (
    <div className="flex flex-col w-3/4 h-screen bg-[url('pages/Chat/image/bg.jpg')] bg-center">
      <Header />
      <Chats />
      <Input />
    </div>
  )
}

export default Room