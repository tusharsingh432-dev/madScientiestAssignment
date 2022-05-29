import './card.css';
import ArmedPenguin from "../images/ArmedPenguin.jpg";

import React from 'react'

function Card() {
    return (
        <div className='Card'>
            <div className='CardTop'>
                <div style={{ "minWidth": "70px", "display": "flex", "alignItems": "baseline", "justifyContent": "space-evenly" }}>
                    <i class="fa-brands fa-gg-circle"></i> tushar
                </div>
                <i class="fas fa-ellipsis-h"></i>
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
                <span style={{ "color": "grey" }}>Add a comment...</span>
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <span style={{ "color": "rgb(6,69,173, 0.5)" }}>POST</span>
            </div>
        </div>
    )
}

export default Card