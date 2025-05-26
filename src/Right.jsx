import './Right.css';
import { useState, useEffect } from 'react';
import NoMessagesAI from './components/NoMessagesAI.jsx';
import { PiSidebarBold } from "react-icons/pi";
import { MdArticle } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import AIlogo from './assets/robot-2-fill.svg';


function Right() {
    const [inputMessage, setInputMessage] = useState("");
    const [askAIMessage, setAskAIMessage] = useState([]);



    const replyAI = () => {
        setTimeout(() => {
            setAskAIMessage(prev => [...prev, { user: "AI", text: "Thinking...",pfp:AIlogo }]);

        }, 500);
        setTimeout(() => {
            setAskAIMessage(prev => {
                const withoutThinking = prev.slice(0, -1);
                return [...withoutThinking, { user: "AI", text: "Here is your real response!",pfp:AIlogo }];
            });
        }, 2000);
    }
    const inputChanges = () => {
        if (inputMessage !== '') {
            setAskAIMessage(prev => [...prev, { user: "You", text: inputMessage,pfp:"https://randomuser.me/api/portraits/men/57.jpg"}]);
            setInputMessage("");
            replyAI();
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            inputChanges();
        }
    }
    return (
        <>
            <div className="right-container">
                <div className="heading-right">
                    <div className='option-container'>
                        <div className="header-option ai-copilot">
                            <MdArticle />
                            AICopilot
                        </div>
                        <span className="header-option">
                            Details
                        </span>
                    </div>
                    <div className="sidebar-close">
                        <PiSidebarBold size={20} />
                    </div>
                </div>
                <div className="ai-messages-container">
                    {askAIMessage.length === 0 ? (
                        <NoMessagesAI />
                    ) : (
                        askAIMessage.map((message, index) => (
                            <div className="chat-user-aibox" key={index}>
                                <img src={message.pfp} alt='user-pfp' className='user-pfp' />
                                <div className="user-message-aibox">
                                    <span className='user-name'>
                                        {message.user}
                                    </span>
                                    <span className='chat-message'>
                                        {message.text}
                                    </span>
                                </div>
                            </div>
                        )))
                    }
                </div>
                <div className="AIchat-box-container">
                    <div className="input">
                        <input type="text" className='message-input' value={inputMessage} placeholder='Ask a question...' onKeyDown={handleKeyDown} onChange={(e) => setInputMessage(e.target.value)} />
                        <div className="send-icon" onClick={inputChanges}>
                            <FaArrowUpLong className='send-button-arrow' size={20} />
                        </div>
                    </div>
                    <div className="clear-messages" onClick={() => setAskAIMessage([])}>
                        <MdDelete />
                        Clear Message
                    </div>
                </div>
            </div >
        </>
    );
}

export default Right;