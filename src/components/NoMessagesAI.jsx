import { RiRobot2Fill } from "react-icons/ri";
import './NoMessagesAI.css';
function NoMessagesAI(){
    return (
        <>
            <div className="nomessage-container">
                <RiRobot2Fill size={80}/>
                <h2>Hi, I'm Fin AI Copilot</h2>
                <p>Ask me anything about this conversation.</p>
            </div>
        </>
    );
}

export default NoMessagesAI;