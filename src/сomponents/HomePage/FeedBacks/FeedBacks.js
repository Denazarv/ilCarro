import React from 'react';
import './FeedBacks.css';
import FeedList from "./FeedList/FeedList";

const FeedBacks = () => {
    return(
        <div className='base'>
        <div class="feed_main">
            <div class="feed_main_topic" >
                Latest feedbacks
                <br/>fROM our customers
            </div>
           <FeedList/>
        </div>
</div>

)
}


export default FeedBacks;