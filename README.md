# React Survey Application

This is a simple React-based survey application that allows users to answer a series of questions. The answers are saved locally, and users can navigate between questions and submit their responses at the end.

## Features

- **Dynamic Questions**: The survey can handle both rating-type and text-type questions.
- **Local Storage**: User responses are stored in the browser's local storage, ensuring data persistence.
- **Navigation**: Users can navigate between questions using "Next" and "Previous" buttons.
- **Responsive Design**: The UI adapts to different screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the survey interface.
- **Local Storage**: To persist user responses.

## Project Structure

├── public
│   └── index.html        # Entry point for the app
├── src
│   ├── components
│   │   └── Survey.js      # Main survey component
│   ├── data
│   │   └── questions.js   # List of survey questions
│   ├── utils
│   │   └── localStorageUtils.js   # Utility functions for local storage
│   ├── App.js            # Root component
│   └── index.js          # Entry point for React
└── README.md             # Project documentation
