import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { MdInsertEmoticon, MdMic } from "react-icons/md";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { useSelector } from "react-redux";
import { CometChat } from "@cometchat-pro/chat";

const Header = () => {
  const { uuid } = useSelector((state) => state.chatUid);
  const [receiver, setReceiver] = useState([]);
  useEffect(() => {
    let receiver = new CometChat.UsersRequestBuilder()
      .setLimit(1)
      .setUIDs([uuid])
      .build();
    receiver.fetchNext().then((r) => {
      setReceiver(r[0]);
    });
  }, [uuid]);
  return (
    <div className="w-full items-center gap-4 flex px-4 py-3 bg-purple-gray-100 border-b">
      <Avatar src={receiver?.avatar} />
      <div className="">
        <h1 className="font-semibold">{receiver?.name}</h1>
        <h1 className="text-xs text-gray-700">{receiver?.status}</h1>
      </div>
    </div>
  );
};

const ChatReceived = ({ message }) => {
  return (
    <div className="py-3 px-4 w-fit bg-blue-50 max-w-[70%] min-w-[100px] rounded-3xl border">
      <h1 className="">{message}</h1>
    </div>
  );
};

const ChatSend = ({ message }) => {
  return (
    <div className="py-3 px-4 w-fit bg-green-50 max-w-[70%] min-w-[100px] rounded-3xl border ml-auto">
      <h1 className="">{message}</h1>
    </div>
  );
};

const Chats = ({ messages }) => {
  const [currentUid, setCurrentUid] = useState("");

  useEffect(() => {
    let listenerID = "UNIQUE_LISTENER_ID";

    CometChat.addMessageListener(
      listenerID,
      new CometChat.MessageListener({
        onTextMessageReceived: (textMessage) => {
          console.log("Text message received successfully", textMessage);
        },
      })
    );
  }, []);

  useEffect(() => {
    CometChat.getLoggedinUser().then(
      (user) => {
        setCurrentUid(user.uid);
        console.log("user details:", user.uid);
      },
      (error) => {
        console.log("error getting details:", { error });
      }
    );
  });

  return (
    <div className="p-4 grow flex flex-col gap-2 overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-purple-gray-700 scrollbar-track-purple-gray-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      {messages?.map((msg) => {
        if (msg.sender.uid === currentUid) {
          return <ChatSend key={msg.data.text} message={msg.data.text} />;
        } else {
          return <ChatReceived key={msg.data.text} message={msg.data.text} />;
        }
      })}
    </div>
  );
};

const Input = ({
  input,
  setInput,
  sendMessage,
  open,
  setOpen,
  onEmojiClick,
}) => {
  return (
    <form
      className="w-full bg-purple-gray-100 p-4 flex items-center gap-4"
      onSubmit={(e) => sendMessage(e)}
    >
      {open && (
        <div className="absolute bottom-[70px]">
          <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} />
        </div>
      )}
      <MdInsertEmoticon
        onClick={() => setOpen((prevState) => !prevState)}
        className="text-3xl cursor-pointer"
      />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="grow rounded-full focus:outline-none px-4 py-2"
        type="text"
      />
      {/* <MdMic className='text-3xl cursor-pointer' /> */}
    </form>
  );
};

const Room = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const { uuid } = useSelector((state) => state.chatUid);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let limit = 30;
    let messagesRequest = new CometChat.MessagesRequestBuilder()
      .setUID(uuid)
      .setLimit(limit)
      .build();

    messagesRequest.fetchPrevious().then(
      (messages) => {
        setMessages(messages);
        console.log("Message list fetched:", messages);
      },
      (error) => {
        console.log("Message fetching failed with error:", error);
      }
    );
  }, [uuid]);
  const onEmojiClick = (event, emojiObject) => {
    setInput((prevState) => prevState + emojiObject.emoji);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    let receiverType = CometChat.RECEIVER_TYPE.USER;
    let textMessge = new CometChat.TextMessage(uuid, input, receiverType);
    CometChat.sendMessage(textMessge).then(
      (message) => {
        console.log("Message sent successfully:", message);
        let limit = 30;
        let messagesRequest = new CometChat.MessagesRequestBuilder()
          .setUID(uuid)
          .setLimit(limit)
          .build();

        messagesRequest.fetchPrevious().then(
          (messages) => {
            setMessages(messages);
            console.log("Message list fetched:", messages);
          },
          (error) => {
            console.log("Message fetching failed with error:", error);
          }
        );
      },
      (error) => {
        console.log("Message sending failed with error:", error);
      }
    );
    setInput("");
  };
  return (
    <div className="flex flex-col w-3/4 h-screen  bg-center">
      <Header />
      <Chats messages={messages} />
      <Input
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        open={open}
        setOpen={setOpen}
        onEmojiClick={onEmojiClick}
      />
    </div>
  );
};

export default Room;
