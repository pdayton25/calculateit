import React from "react";

const Result = ({result, message}) => {
    return(
        <div className="result">{message}{result}</div>
    )
};
export default Result;