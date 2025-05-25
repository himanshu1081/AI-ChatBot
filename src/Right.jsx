import './Right.css';
import { PiSidebarBold } from "react-icons/pi";
import { MdArticle } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";

function Right() {
    return (
        <>
            <div className="right-container">
                <div className="heading-right">
                    <div className='option-container'>
                        <div className="header-option ai-copilot">
                            <MdArticle/>
                            AICopilot
                        </div>
                        <span className="header-option">
                            Details
                        </span>
                    </div>
                    <div className="sidebar-close">
                        <PiSidebarBold  size={20}/>
                    </div>
                </div>
                <div className="ai-message">

                </div>
                <div className="AIchat-box-container">
                    <input type="text" className='message-input' placeholder='Ask a question...' />
                    <div className="send-icon" >
                        <FaArrowUpLong />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Right;