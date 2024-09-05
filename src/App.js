import React, { useState } from 'react';
import WelcomeScreen from './components/ WelcomeScreen';
import Survey from './components/Survey';
import ThankYouScreen from './components/ThankYouScreen';
import { saveSessionFlag } from './utils/localStorageUtils';

const App = () => {
  const [stage, setStage] = useState('welcome');

  const startSurvey = () => setStage('survey');
  
  const submitSurvey = () => {
    saveSessionFlag('COMPLETED');
    setStage('thankYou');
  };

  const resetSurvey = () => {
    setStage('welcome');
  };

  return (
    <div className="App">
      {stage === 'welcome' && <WelcomeScreen onStart={startSurvey} />}
      {stage === 'survey' && <Survey onSubmit={submitSurvey} />}
      {stage === 'thankYou' && <ThankYouScreen onReset={resetSurvey} />}
    </div>
  );
};

export default App;

