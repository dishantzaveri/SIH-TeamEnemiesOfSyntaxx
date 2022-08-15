import React from "react";
import Room from "./Room";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { useState } from "react";
const Chat = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    CometChat.getLoggedinUser().then(
      (user) => {
        console.log("user details:", { user });
      },
      (error) => {
        console.log("error getting details:", { error });
      }
    );

    let usersRequest = new CometChat.UsersRequestBuilder().setLimit(30).build();
    usersRequest.fetchNext().then((userList) => {
      setUsers(userList);
      console.log(userList);
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar usersList={users} />
      <Room />
    </div>
  );
};

export default Chat;
