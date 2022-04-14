import React from 'react';

const AddGrade = () => {
    return (
        <div className="calculator">
            <label className="grade">Grade: </label>
            <select className="grade-select">
                <option>A+</option>
                <option>A</option>
                <option>A-</option>
                <option>B+</option>
                <option>B</option>
                <option>B-</option>
                <option>C+</option>
                <option>C</option>
                <option>C-</option>
                <option>D+</option>
                <option>D</option>
                <option>D-</option>
                <option>F</option>
            </select>
            <label>Credits: </label>
            <input className='credits'></input>
        </div>
    );
};
export default AddGrade;