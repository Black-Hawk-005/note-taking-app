# Notezy

A modern, full-stack note-taking application built with React and Node.js. Notezy provides a clean and intuitive interface for creating, editing, and managing your notes with real-time synchronization.

## Live Demo

**Deployed Application:** [https://notezy-4zic.onrender.com]

## Features

- **Create & Edit Notes**: Simple and intuitive note creation with a rich text editing experience
- **Real-time Sync**: Notes are automatically saved and synchronized with the backend
- **Rate Limiting**: Built-in API rate limiting using Upstash Redis for optimal performance
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean interface built with React and Tailwind CSS

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database for note storage
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting and caching
- **dotenv** - Environment variable management

## Project Structure

```
note-taking-app/
├── frontend/          # React frontend application
│   ├── src/          # Source files
│   ├── public/       # Static assets
│   └── dist/         # Production build
├── backend/          # Node.js backend API
│   ├── src/          # Source files
│   │   ├── config/   # Configuration files
│   │   ├── models/   # MongoDB models
│   │   └── routes/   # API routes
│   └── .env          # Environment variables
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Upstash Redis account (for rate limiting)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd note-taking-app
```

2. Install dependencies for both frontend and backend
```bash
npm install
```

3. Configure environment variables

Create a `.env` file in the `backend` directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

4. Start the development servers

For backend:
```bash
cd backend
npm run dev
```

For frontend:
```bash
cd frontend
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Deployment

This application is deployed on Render. To deploy your own instance:

1. **Backend Deployment**:
   - Create a new Web Service on Render
   - Connect your GitHub repository
   - Set Root Directory to `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables in Render dashboard

2. **Frontend Deployment**:
   - Create a new Static Site on Render
   - Connect your GitHub repository
   - Set Root Directory to `frontend`
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## API Endpoints

- `GET /api/notes` - Fetch all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update an existing note
- `DELETE /api/notes/:id` - Delete a note

## Rate Limiting

The API implements rate limiting to prevent abuse:
- 40 requests per 20-second window per IP address
- Powered by Upstash Redis for distributed rate limiting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Built with ❤️ using React and Node.js