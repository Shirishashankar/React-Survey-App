export const saveResponse = (questionId, answer) => {
    let responses = JSON.parse(localStorage.getItem('responses')) || {};
    responses[questionId] = answer;
    localStorage.setItem('responses', JSON.stringify(responses));
  };
  
  export const getResponses = () => {
    return JSON.parse(localStorage.getItem('responses')) || {};
  };
  
  export const saveSessionFlag = (flag) => {
    localStorage.setItem('sessionStatus', flag);
  };
  
  export const getSessionFlag = () => {
    return localStorage.getItem('sessionStatus');
  };
  