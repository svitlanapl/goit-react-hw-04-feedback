import React from "react";

export const FeedbackOptions = ({
    // onCountGoodFeedback,
    // onCountNeutralFeedback,
    // onCountBadFeedback   
    options, onLeaveFeedback }) => {
    return options.map(option => (
        <button type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
        >
            {option}
        </button>
    ));
    }
//     <div><button type="button" onClick={onCountGoodFeedback}>
//         Good
//     </button></div>
    
//     <button type="button" onClick={onCountNeutralFeedback}>
//         Neutral
//     </button>
//     <button type="button" onClick={onCountBadFeedback}>
//         Bad
//     </button>
// }
