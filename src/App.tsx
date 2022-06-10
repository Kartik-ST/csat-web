import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import SurveyForm from './components/survey-form';

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      <SurveyForm/>
    </div>
  );
}

export default App;
