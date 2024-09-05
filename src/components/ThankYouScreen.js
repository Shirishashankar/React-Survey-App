import React, { useEffect } from 'react';

const ThankYouScreen = ({ onReset }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onReset]);

  return <div className="thank-you">
    <h1>Thank you for your time!</h1>
    </div>;
};

export default ThankYouScreen;
