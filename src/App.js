import React from 'react';
import HourlyToSalary from './components/SalaryCalculators/HourlyToSalary';
import SalaryToHourly from './components/SalaryCalculators/SalaryToHourly';
import GPA from './components/GPACalculator/GPA';
import './App.css';

const App = () => {
  return (
    <div>
      <HourlyToSalary />
      <br></br>
      <SalaryToHourly />
      <br></br>
      <GPA />
    </div>
  );
}

export default App;
