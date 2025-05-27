
import './ChatBoxCard.css';
import { LuDot } from "react-icons/lu";

function ChatBoxCard( props) {
const handleCardClick = ()=>{
    props.setName(props.name);
    props.setPfp(props.pfp);
    props.setMessage(props.message);
};
    return (
        <>
            <div className={`card-container ${props.darkmode?'dark':'light'}`} onClick={() => handleCardClick()}>
                <div className="pfp-container">
                    <img src={props.pfp} alt='pfp' className='pfp' />
                </div>
                <div className="info-container">
                    <div className="info-name">
                        <p className='info-name-company'>{props.name.split(' ')[0]} <LuDot /> {props.company}</p>
                    </div>
                    <div className="message">
                        {props.message}
                    </div>
                </div>
            </div>
        </>
    );
}


export default ChatBoxCard;