import React from "react";
import AddGrade from "./AddGrade";

const GPA = () => {
    return(
        <div className="GPA">
            <div>Add your grades to calculate your GPA</div>
            <AddGrade />
            <AddGrade />
            <AddGrade />
            <AddGrade />
        </div>
    );
}
export default GPA;