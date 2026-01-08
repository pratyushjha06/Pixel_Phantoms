# Backend API - Pixel Phantoms

## Overview
This is the backend API for Pixel Phantoms, built with Express.js.

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on the example:
```bash
PORT=5000
NODE_ENV=development
```

### Running the Server

Start the server:
```bash
npm start
```

For development:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/v1/health`
- Returns server status
- **Response:**
  ```json
  {
    "status": "OK",
    "message": "Server is running",
    "timestamp": "2026-01-08T10:30:00.000Z"
  }
  ```

## Project Structure

```
backend/
├── src/
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Custom middleware
│   ├── routes/       # API routes
│   └── server.js     # Express server setup
├── .env              # Environment variables (not in git)
├── .gitignore
├── package.json
└── README.md
```

## Dependencies

- **express**: Web framework
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing
- **helmet**: Security headers
- **morgan**: HTTP request logger
