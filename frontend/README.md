# Chat-app

A full-stack real-time chat application built with React (frontend) and Node.js/Express (backend), featuring authentication, image upload, and live messaging using Socket.IO.

## Features

- User authentication (signup, login, logout)
- Real-time messaging with Socket.IO
- Image upload (Cloudinary integration)
- Responsive UI with loading indicators
- User profile and settings
- Modern React with Zustand for state management

## Tech Stack

- **Frontend:** React, Zustand, Tailwind CSS, Vite
- **Backend:** Node.js, Express, MongoDB, Socket.IO
- **Image Hosting:** Cloudinary

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB database
- Cloudinary account

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Chat-app.git
cd Chat-app
```

#### 2. Backend Setup

- Copy `.env.sample` to `.env` in the `backend/` directory and fill in your values.
- Install dependencies and start the server:

```bash
cd backend
npm install
npm start
```

#### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

- The frontend will run on `http://localhost:5173` by default.

## Environment Variables

See `backend/.env.sample` for required backend environment variables.

## Repository Structure

```
Chat-app/
  backend/
    src/
    .env.sample
    .gitignore
    package.json
  frontend/
    src/
    .gitignore
    package.json
  README.md
```

## License

MIT
