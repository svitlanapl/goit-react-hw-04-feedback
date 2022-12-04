import React from "react";

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <div>
            <div>
                Good:<span>{good}</span>
            </div>
            <div>
                Neutral:<span>{neutral}</span>
            </div>
            <div>
                Bad:<span>{bad}</span>
            </div>
            <div>
                Total:<span>{total}</span>
            </div>
            <div>
                Positive feedback:<span>{positivePercentage}%</span>
            </div>
        </div> 
    )  
}

        // <ul>
        //     <li>Good:{good}</li>
        //     <li>Neutral:{neutral}</li>
        //     <li>Bad:{bad}</li>
        //     <li>Total:{total}</li>
        //     <li>Positive feedback:{positivePercentage()}%</li>
        // </ul> 