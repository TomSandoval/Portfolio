import "./ChatBot.css";
import ChatBot from "react-simple-chatbot";
import { useState } from "react";
import Avatar from "../../assets/Avatar chat.png";

function Bot() {
  const [showChat, setShowChat] = useState(false);
  const [userResponse, setUserResponse] = useState(""); // Estado para almacenar la respuesta del usuario

  const handleShow = () => {
    setShowChat(!showChat);
  };


  return (
    <div className="chatbot-container">
      {showChat && (
        <ChatBot
        cache={false}
          botAvatar={Avatar}
          headerTitle="ChatBot"
          steps={[
            {
              id: "1",
              message: "Hello, how can I help you?",
              trigger: "2",
            },
            {
              id: "2",
              options: [
                {value: "1", label: "I would like to get to know you better.", trigger: "3"},
              ] // Ir al siguiente paso
              },
            {
              id: "3",
              component: (
                <div>
                    <p>My name is ChatBot, I am a virtual assistant.</p>
                </div>
              ), // Utilizar la respuesta del usuario en el mensaje
              end: true, // Volver al paso del usuario
            },
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
