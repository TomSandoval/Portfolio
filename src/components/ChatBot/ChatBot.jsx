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


  const handleDownload = () => {
    const fileURL = "/public/Resume Sandoval.pdf";
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "Resume Sandoval.pdf";
    link.click();
  }

  const handleEnd = ({ steps, values }) => { 
    if (values[1] === 2) {
      setTimeout(() => {
        navigate("/about");
      }, 2000);
    }
    if (values[0] === 4) {
      setTimeout(() => {
        navigate("/portfolio");
      }, 2000);
    }
    if (values[0] === 5) {
      setTimeout(() => {
        navigate("/contact");
      }, 2000);
    }
    if (values[0] === 6) {
      handleDownload();
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
                { value: 4, label: "I would like to see your projects.", trigger: "8" },
                {
                  value: 5,
                  label: "I would like to contact you.",
                  trigger: "9",
                },
                {
                  value: 6,
                  label: "I would like to see your resume.",
                  trigger: "10",
                }
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
            },
            {
              id: "8",
              message: "Let's go to the 'Portfolio' section!",
              end: true,
            },
            {
              id: "9",
              message: "Let's go to the 'Contact' section!",
              end: true,
            },
            {
              id: "10",
              message: "Sure, I'm downloading my resume on your device right now!",
              end: true,
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
