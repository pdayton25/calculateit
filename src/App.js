import React from 'react';
import HourlyToSalary from './components/SalaryCalculators/HourlyToSalary';
import './App.css';
import SalaryToHourly from './components/SalaryCalculators/SalaryToHourly';
const App = () => {
  return (
    <div>
      <HourlyToSalary />
      <SalaryToHourly />
    </div>
  );
}

export default App;
