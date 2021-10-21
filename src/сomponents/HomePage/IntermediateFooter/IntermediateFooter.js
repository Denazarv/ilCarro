import React from 'react';
import './IntermediateFooter.css'
import LeftText from "./LeftText/LeftText";
import MiddleText from "./MiddleText/MiddleText";
import RightText from "./RightText/RightText";

const IntermediateFooter = (props) => {
    return (
        <div className='base'>
        <div className="intermediate_footer">
            <div className="cornerLine"></div>
            <div className="int_footer_texts">
                <LeftText/>
                <MiddleText/>
                <RightText/>
            </div>
        </div>
        </div>
    )
}

export default IntermediateFooter;