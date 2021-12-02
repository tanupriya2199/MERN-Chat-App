import { useState, useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fecthChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fecthChats();
  }, []);

  return (
    <div>
      {chats && chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)}
    </div>
  );
};

export default ChatPage;
