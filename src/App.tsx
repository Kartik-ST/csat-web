import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import SurveyForm from './components/survey-form';
import EmailComponent from './components/emailComponent';

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      <SurveyForm/>
      {/* <EmailComponent/> */}
    </div>
  );
}

export default App;
