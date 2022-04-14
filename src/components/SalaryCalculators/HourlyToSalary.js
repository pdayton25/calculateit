import React, { useState} from "react";
import Result from "../Result";

const HourlyToSalary = () => {
    /** State **/
    const [hourlyRate, setHourlyRate] = useState(0);
    const [weeklyHours, setWeeklyHours] = useState(0);
    const [weeksPerYear, setWeeksPerYear] = useState(0);
    const [result, setResult] = useState();
    console.log(hourlyRate);
    
    const hourlyToSalary = (event) => {
        event.preventDefault();
        setResult(hourlyRate * weeklyHours * weeksPerYear);
    }

    return (
        <div>
            <div className="title">Hourly to Salary Calculator</div>
            <form className="hour-salary">    
                <label>Hourly rate:</label>
                <input placeholder="$" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)}></input>
                <label>Hours per week:</label>
                <input placeholder="40" value={weeklyHours} onChange={(e) => setWeeklyHours(e.target.value)}></input>
                <label>Weeks worked per year</label>
                <input placeholder="0-52" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)}></input>
                <input type="submit" value="Submit" onClick={hourlyToSalary}></input>
            </form>
            <Result
                result={result}
                message="Salary: "
            />
        </div>
    )
};
export default HourlyToSalary;

//