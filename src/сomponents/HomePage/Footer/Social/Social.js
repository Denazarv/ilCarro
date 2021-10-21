import React from 'react';
import fb from "../../../../assets/icons/facebook.png"
import tel from "../../../../assets/icons/telegram.png"
import vk from "../../../../assets/icons/vk.png"
import inst from "../../../../assets/icons/insta.png"
import slack from "../../../../assets/icons/slack.png"

const Social = () => {
    return (
        <div className="social">
            <a href = "http://www.facebook.com"><img src={fb} alt="fb"/></a>
            <a href = "http://www.telegram.org"><img src={tel} alt="telegram"/></a>
            <a href= "http://www.vk.com"><img src={vk} alt="vk"/></a>
            <a href = "http://www.instagram.com"><img src={inst} alt="insta"/></a>
            <a href = "http://www.twitter.com"><img src={slack} alt="hashtag"/></a>
        </div>
    )
}

export default Social;