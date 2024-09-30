# News Web App

## Overview

This News Web App is built with React.js and integrates Firebase Authentication for user authentication and News API from newsapi.org to fetch the latest news articles. Additionally, Redux is used to manage the user's watchlist, allowing them to add and remove articles for future reference.

## Features

- **Firebase Authentication:** Secure user authentication to access personalized features.
- **News API Integration:** Fetches real-time news articles from News API for a comprehensive news feed.
- **Redux Watchlist:** Allows users to add and remove articles from their watchlist for later reference.
- **Responsive Design:** The app is designed to provide a seamless experience across various devices.

## Tech Stack

- React.js
- Firebase Authentication
- News API (newsapi.org)
- Redux

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project set up with Authentication enabled
- News API key (get it from [newsapi.org](https://newsapi.org/))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/news-web-app.git
cd news-web-app
```

2. Install frontend dependencies:

```bash
 cd appname
 npm install
```

3. Configure Firebase:

- Create a Firebase project and set up Authentication.
- Copy the Firebase configuration object from the Firebase Console.
- Create a .env file in the project root and add your Firebase configuration:
  ```bash
  REACT_APP_FIREBASE_API_KEY=your-api-key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
  REACT_APP_FIREBASE_PROJECT_ID=your-project-id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  REACT_APP_FIREBASE_APP_ID=your-app-id
  ```

4. Configure News API:

- Get your News API key from newsapi.org.
- Create a .env file in the project root and add your News API key:

  ```bash
  REACT_APP_NEWS_API_KEY=your-news-api-key

  ```

5. Run the application:

   ```bash
    npm start
   ```

   Access the application in your browser at `http://localhost:3000`.


