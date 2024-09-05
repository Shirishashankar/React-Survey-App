// Confirmation component 
import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => (
  <div className="confirmation-dialog">
    <p>Are you sure you want to submit the survey?</p>
    <button onClick={onConfirm}>Yes</button>
    <button onClick={onCancel}>No</button>
  </div>
);

export default ConfirmationDialog;
