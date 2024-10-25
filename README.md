# Connectify Frontend

This is the frontend for **Connectify**, a contact management application that allows users to save, view, and manage their contacts. This project was built with React and uses React Query for data fetching, with JWT-based authentication.

## Features

- **Authentication**: Secure login and signup using JWT.
- **Contact Management**: CRUD operations for contacts.
- **Protected Routes**: Only logged-in users can access specific routes.
- **Real-time Feedback**: Uses `react-hot-toast` for notifications.
- **Global Styling**: Consistent styling with styled-components and global styles.

## Tech Stack

- **React**
- **React Router**
- **React Query**
- **Styled Components**
- **Axios**
- **React Hot Toast**

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend server running for API calls (make sure the backend is running on `http://localhost:8000` or adjust the `.env` file).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/connectify-frontend.git
   ```

Navigate to the project directory:
bash
Copy code
cd connectify-frontend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory with the following environment variables:
plaintext
Copy code
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1
Start the development server:
bash
Copy code
npm start
Running Tests
To run unit tests, use:

bash
Copy code
npm test
Folder Structure
src/components: Reusable UI components
src/pages: Different pages of the application
src/context: User authentication and other global contexts
src/services: API service files
src/styles: Global styles and styled-components
Available Scripts
npm start: Start the development server.
npm test: Run unit tests.
npm build: Build the app for production.
