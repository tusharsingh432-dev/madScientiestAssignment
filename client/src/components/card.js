import './card.css';
import ArmedPenguin from "../images/ArmedPenguin.jpg";
import Modal from 'react-modal';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function Card() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const cardId = uuidv4();
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }

    async function report(e) {
        e.preventDefault();
        try {
            await axios.post('/api/report', { cardId });
        } catch (e) {
            alert("Report Failed");
            console.log(e);
        }
        closeModal();
    }

    return (
        <div className='Card' key={cardId}>
            <div className='CardTop'>
                <div style={{ "minWidth": "70px", "display": "flex", "alignItems": "baseline", "justifyContent": "space-evenly" }}>
                    <i class="fa-brands fa-gg-circle"></i> tushar
                </div>
                <i class="fas fa-ellipsis-h" onClick={openModal}></i>
            </div>
            <hr />
            <img className='CardImg' src={ArmedPenguin} alt='Armed Penguin' />
            <div className='CardIcons'>
                <div className='CardIconsLeft'>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-share-from-square"></i>
                </div>

                <i class="fa-regular fa-bookmark"></i>
            </div>
            <div className='CardInfo'>
                <p>232 Likes</p>
                <p>tushar <span style={{ "fontWeight": "normal" }}>by <span style={{ "color": "#0645AD" }}>@tusharsingh432-dev</span>... <span style={{ "color": "grey" }}>more</span></span></p>
                <div style={{ "color": "grey" }}>
                    <p>View 1 comment</p>
                    <p style={{ "fontSize": "smaller" }}>2 HOURS AGO</p>
                </div>
            </div>
            <hr />

            <div className='CardComments'>
                <i class="fa-regular fa-face-smile"></i>
                &nbsp; &nbsp;
                <input type="text" style={{ "color": "grey", "border": "none", "outline": "none" }} placeholder="Add a comment..." />
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp;
                <span style={{ "color": "rgb(6,69,173, 0.5)" }}>Post</span>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="Modal"
            >
                <form>
                    <button className='ModalButtons' onClick={report} >Report</button>
                    <hr />
                    <button className='ModalButtons'>Unfollow</button>
                </form>
            </Modal>
        </div>
    )
}

export default Card