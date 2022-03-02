import "./messenger.css"
import { useContext, useState, useEffect } from "react"
import Topbar from "../../components/topbar/Topbar"
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

function Messenger() {
  const [conversation, setConversation] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id)
        setConversation(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getConversations()
  }, [user._id])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id)
        setMessages(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMessages()
  }, [currentChat])

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="search for friends" className="chatMenuInput" />
            {conversation.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation key={c._id} conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          {currentChat ?
            (<>
              <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                  {
                    messages.map((m) => (
                      <Message message={m} own={m.sender === user._id} />
                    ))
                  }
                </div>
                <div className="chatBoxBottom">
                  <textarea name="" className="chatMessageInput" placeholder="Write something..."></textarea>
                  <button className="chatSubmitButton">Send</button>
                </div>
              </div>
            </>)
            : (
              <span className="noConversationText">Open a conversation to start a chat.</span>
            )}
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger
