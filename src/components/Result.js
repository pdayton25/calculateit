import React from "react";

const Result = ({result, message }) => {

    return(
        <div className="result-container">
            <div className="message">{message}</div>
            <div className="result">{result}</div>
        </div>
    )
};
export default Result;