import "./ChatBot.css";
import ChatBot from "react-simple-chatbot";
import { useState } from "react";
import Avatar from "../../assets/Avatar chat.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Bot() {
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShowChat(!showChat);
  };


  const handleEnd = ({ steps, values }) => {
    console.log(values);
    if (values[0] === 1) {
      setTimeout(() => {
        navigate("/about");
      }, 2000);
    }
  }


  return (
    <div className="chatbot-container">
      {showChat && (
        <ChatBot
        cache={false}
          botAvatar={Avatar}
          headerTitle="ChatBot"
          handleEnd={handleEnd}
          steps={[
            {
              id: "1",
              message: "Hello, how can I help you?",
              trigger: "2",
            },
            {
              id: "2",
              options: [
                { value: 1, label: "I would like to get to know you better.", trigger: "3" },
              ]
            },
            {
              id: "3",
              message: "My name is Tomás Sandoval, and I am a full stack web developer passionate about software development!",
              trigger: "4",
            },
            {
              id: "4",
              message: "Would you like to know more about me?",
              trigger: "5",
            },
            {
              id: "5",
              options: [
                { value: 2, label: "Yes", trigger: "6" },
                { value: 3, label: "No", trigger: "7" },
              ]
            },
            {
              id: "6",
              message: "Let's go to the 'About Me' section!",
              end: true,
            },
            {
              id: "7",
              message: "Ok, what else can I do for you?",
              trigger: "2"
            }
          ]}
        />
      )}
      <img
        onClick={handleShow}
        className="avatar-chat"
        src={Avatar}
        alt="Avatar logo"
      ></img>
    </div>
  );
}



export default Bot;
