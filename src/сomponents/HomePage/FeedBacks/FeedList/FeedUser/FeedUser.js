import React from 'react';
import userIcon from '../../../../../assets/img/user-icon.jpg'

const FeedUser = () => {
    return (
        <div class="feed_user">
            <img src={userIcon} alt="user"/>
            <div class="feed_text">Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton
                candy cake chocolate cake. And may be will be something else
            </div>
            <div class="name_user">Candy Miles</div>
            <div class="feed_date">22 September 2019</div>
        </div>
    )
}
export default FeedUser;


// ============================================================




// const FeedUser = (props) => {
//     const feedback = props.feedback;
//
//     return (
//         <div class="feed_user">
//             <img src={feedback.icon} alt="user"/>
//             <div class="feed_text">
//                 {feedback.content}
//                 Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton
//                 candy cake chocolate cake. And may be will be something else
//             </div>
//             <div class="name_user">{feedback.author} Candy Miles</div>
//             <div class="feed_date">22 September 2019</div>: 'sdgf'
//             }}/>
//
//             <User userData={{
//                 id: 1,
//                 name
//             </div>
//                 )
//             }