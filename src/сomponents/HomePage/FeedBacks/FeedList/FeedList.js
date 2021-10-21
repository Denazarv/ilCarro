import React from 'react';
import FeedUser from "./FeedUser/FeedUser";


const FeedList = () => {
    return(
            <div class="feeds_list">
                <FeedUser/>
                <FeedUser/>
                <FeedUser/>
                <FeedUser/>
                <FeedUser/>
                <FeedUser/>
            </div>
)
}




export default FeedList;



// ===================================================


//
// const userFeedbacks = [
//     {
//         id: 1,
//         name:'sdfs'
//     },
//     {},
//     {}
// ];
//
// class FeedList extends Component {
//     componentDidMount() {
//         api.getFeedbacks()
//             .then((data) => {
//                 this.setState({feedbacks: data})
//             });
//     }
//
//     render() {
//         // const userFeedbacks = this.state.feedbacks;
//         // const userFeedbacks = this.props.userFeedbacks;
//
//
//         return (
//             <div class="feeds_list">
//                 {userFeedbacks.map(feedback => (
//                     <FeedUser feedback={feedback}/>
//                 ))}
//             </div>
//         )
//     }
// }
//
//
// export default FeedList;