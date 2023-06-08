import "./ChatBot.css";
import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';
import Avatar from '../../assets/Avatar chat.png';


function Bot() {
    const [showChat, setShowChat] = useState(false)


    const handleShow = () => {
        setShowChat(!showChat)
      }



    return (
        <div className="chatbot-container">
            {showChat && <ChatBot
                botAvatar={Avatar}
                headerTitle="ChatBot"
                steps={[
                    {
                        id: '1',
                        message: 'Hello, how can I help you?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        options: [
                            { value: 1, label: 'About me', trigger: '3' },
                            { value: 2, label: 'Portfolio', trigger: '4' },
                            { value: 3, label: 'Contact', trigger: '5' },
                        ],
                    },
                    {
                        id: '3',
                        message: 'I am a full stack developer, I have knowledge in HTML, CSS, JavaScript, React, Redux, Node, Express, PostgreSQL, Sequelize, among others.',
                        trigger: '6',
                    },
                    {
                        id: '4',
                        message: 'Check out my work, from basic landing pages to professional e-commerce sites built with market-leading technologies. I perform well working independently, but what I enjoy most is working with a team that shares the same passion for programming!',
                        trigger: '6',
                    },
                    {
                        id: '5',
                        message: 'You can contact me through my email: tomassandoval079@gmail.com',
                        trigger: '6',
                    },

                    {
                        id: '6',
                        message: 'Do you want to know something else?',
                        trigger: '7',
                    },
                    {
                        id: '7',
                        options: [
                            { value: 1, label: 'Yes', trigger: '2' },
                            { value: 2, label: 'No', trigger: '8' },
                        ],
                    },
                    {
                        id: '8',
                        message: 'Thank you for visiting my website!',
                        end: true,
                    },
                ]}
            />}
            <img onClick={handleShow} className="avatar-chat" src={Avatar} alt="Avatar logo"></img>
        </div>
    )
}



export default Bot;