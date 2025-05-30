import './Left.css';
import { BsFillMoonStarsFill, BsChatLeftTextFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";
import ChatBoxCard from './components/ChatBoxCard.jsx';
import { useState } from 'react';
import { LuPanelLeftClose } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { RiBookmarkFill } from "react-icons/ri";
import { MdEmojiEmotions } from "react-icons/md";

import './chat.css';

function Left() {

    const data = [
        {
            name: "Aarav Mehta",
            company: "TechNova Solutions",
            pfp: "https://randomuser.me/api/portraits/men/32.jpg",
            message: "Just onboarded three new clients for our AI chatbot — they’re loving the instant support and lead generation boost!"
        },
        {
            name: "Riya Kapoor",
            company: "BrightByte Inc.",
            pfp: "https://randomuser.me/api/portraits/women/21.jpg",
            message: "Demoed our chatbot to a retail brand today — they were amazed by how natural it felt. Feels good to be building something this impactful!"
        },
        {
            name: "Kabir Sharma",
            company: "NextGen Systems",
            pfp: "https://randomuser.me/api/portraits/men/31.jpg",
            message: "Integrated our AI bot with a healthcare platform — now patients can book appointments and get answers 24/7. Game changer!"
        },
        {
            name: "Ishita Verma",
            company: "CreativeHive Studio",
            pfp: "https://randomuser.me/api/portraits/women/41.jpg",
            message: "Been refining the tone of our AI chatbot. Making sure it sounds both human and helpful — it's all about the customer experience!"
        },
        {
            name: "Yash Singh",
            company: "InnoTech Labs",
            pfp: "https://randomuser.me/api/portraits/men/51.jpg",
            message: "Wrapped up a big presentation on how our chatbot reduces support tickets by 60%. The data speaks for itself!"
        },
        {
            name: "Kabir Sharma",
            company: "NextGen Systems",
            pfp: "https://randomuser.me/api/portraits/men/31.jpg",
            message: "Integrated our AI bot with a healthcare platform — now patients can book appointments and get answers 24/7. Game changer!"
        },
        {
            name: "Ishita Verma",
            company: "CreativeHive Studio",
            pfp: "https://randomuser.me/api/portraits/women/41.jpg",
            message: "Been refining the tone of our AI chatbot. Making sure it sounds both human and helpful — it's all about the customer experience!"
        },
        {
            name: "Yash Singh",
            company: "InnoTech Labs",
            pfp: "https://randomuser.me/api/portraits/men/51.jpg",
            message: "Wrapped up a big presentation on how our chatbot reduces support tickets by 60%. The data speaks for itself!"
        }
    ];

    const [name, setName] = useState(data[0].name);
    const [pfp, setPfp] = useState(data[0].pfp);
    const [message, setMessage] = useState(data[0].message);
    const [inputMessage, setInputMessage] = useState("");
    const [sidebar, setSidebar] = useState(true);
    const [darkmode, setDarkmode] = useState(false);
    const [sentMessage, setSentMessage] = useState([{ text: "Wow that's so cool!" }]);
    const inputChanges = () => {
        if (inputMessage !== '') {
            setSentMessage(prev => [...prev, { text: inputMessage }]);
            setInputMessage("");
        }
    };
    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            inputChanges();
        }
    }
    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
        console.log(darkmode);
    }
    return (
        <>
            <div className={`left-container ${darkmode ? 'dark' : 'light'}`}>
                <div className="heading-container">
                    <span className='heading'>Your Inbox</span>
                    <span className="name">{name}</span>
                    <div className="button-container">
                        <HiDotsHorizontal className='button' />
                        <BsFillMoonStarsFill className='button' onClick={toggleDarkMode} />
                        <div className="button-close" >
                            <FaWindowClose />
                            <span className='button-close-text'>Close</span>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <div className={`contacts-container ${sidebar ? 'expanded' : 'collapsed'}`}>
                        <div className="button2-container" onClick={() => setSidebar(false)}>
                            <LuPanelLeftClose className='button' />
                        </div>
                        <div className="filter-container">
                            <select className='filter filter-1'>
                                <option>Open</option>
                            </select>
                            <select className='filter filter-2'>
                                <option>Waiting longest</option>
                                <option>By-Date</option>
                            </select>
                        </div>
                        <div className="number-container">
                            <div className="person">
                                {data.map((d, index) => {
                                    return (
                                        <ChatBoxCard
                                            key={d.index}
                                            name={d.name}
                                            company={d.company}
                                            pfp={d.pfp}
                                            message={d.message}
                                            setName={setName} setPfp={setPfp} setMessage={setMessage}
                                            darkmode={darkmode}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="chat-container">
                        <div className="message-container">
                            <div className="chat-client">
                                <img src={pfp} alt="" className='client-pfp' />
                                <div className="client-message">{message}</div>
                            </div>
                            {sentMessage.map((message, index) => (
                                <div className="chat-user" key={index}>
                                    <div className="user-message">{message.text}</div>
                                    <img src="https://randomuser.me/api/portraits/men/57.jpg" alt='user-pfp' className='user-pfp' />
                                </div>
                            ))}
                        </div>
                        <div className="chat-box-container">
                            <div className="line1">
                                <BsChatLeftTextFill />
                                <select className='filter filter-2'>
                                    <option>Chat</option>
                                    <option>Use AI</option>
                                </select>
                            </div>
                            <input type="text" value={inputMessage} className='message-input' placeholder='Send a message...' onKeyDown={handleKeyDown} onChange={(e) => setInputMessage(e.target.value)} />
                            <div className='line3'>
                                <div className="options">
                                    <AiFillThunderbolt />
                                    <RxDividerVertical />
                                    <RiBookmarkFill />
                                    <MdEmojiEmotions />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Left;