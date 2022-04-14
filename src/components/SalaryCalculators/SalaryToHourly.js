import React, { useState} from "react";
import Result from "../Result";

const SalaryToHourly = () => {
    const [salary, setSalary] = useState(0);
    const [weeklyHours, setWeeklyHours] = useState(0);
    const [weeksPerYear, setWeeksPerYear] = useState(0);
    const [result, setResult] = useState();
    const [payPeriod, setPayPeriod] = useState(1);

    
    const hourlyToSalary = (event) => {
        event.preventDefault();
        setResult((salary * payPeriod) / (weeklyHours * weeksPerYear));
    }

    return (
        <div>
            <div className="title">Salary to Hourly Calculator</div>
            <form className="hour-salary">    
                <label>Salary:</label>
                <input placeholder="$" value={salary} onChange={(e) => setSalary(e.target.value)}></input>
                <select onChange={(e) => setPayPeriod(e.target.value)}>
                    <option value="1">Yearly</option>
                    <option value="12">Monthly</option>
                    <option value="26">Bi-Weekly</option>
                </select>
                <label>Hours per week:</label>
                <input placeholder="40" value={weeklyHours} onChange={(e) => setWeeklyHours(e.target.value)}></input>
                <label>Weeks worked per year</label>
                <input placeholder="0-52" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)}></input>
                <input type="submit" value="Submit" onClick={hourlyToSalary}></input>
            </form>
            <Result
                result={result}
                message="Hourly: "
            />
        </div>
    )
};
export default SalaryToHourly;