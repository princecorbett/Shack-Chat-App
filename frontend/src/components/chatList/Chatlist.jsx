import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "react-query";


const ChatList = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  console.log("API URL:", import.meta.env.VITE_API_URL);

  
    return (
        <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create New Chat</Link>
      <Link to="/">Explore Shack AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
        <div className="list">
        {isLoading
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <div className="upgrade">
        {/* <img src="/logo.png" alt="" /> */}
        <div className="texts">
          {/* <span>Upgrade to Shack AI Pro</span> */}
          {/* <span>Get unlimited access to all features</span> */}
        </div>
        </div>
    </div>
  );
};

export default ChatList;