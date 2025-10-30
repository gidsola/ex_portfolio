# Express + Vite React Starter App
A **starter template** for building full-stack apps with **Express.js** (backend) and **Vite + React** (frontend), using **npm workspaces** for seamless dependency management.
This template is designed to help you quickly set up and start building your next project with modern tooling and best practices.


---
## Folder Structure
```
your-project/
|
├── client/                     # Frontend (Vite + React)
│   ├── dist/                   # Built static files (production)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images, fonts, etc.
│   │   ├── css/                # CSS files
│   │   ├── pages/              # React pages (Home, Login, etc.)
│   │   ├── pages_master.jsx
│   │   ├── main.jsx            # Main entry point
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   └── vite.config.js
|   |
│   └── README.md
│
├── server/
|   |
│   ├── src/
│   │   ├── routes/
│   │   │   ├── api_master.js   # Api master list
│   │   │   └── links.js        # Test endpoint
|   |   |
│   │   └── express.js          # Main Express server
|   |
│   ├── package.json
│   └── README.md
│
├── package.json                # Root (workspaces and scripts)
└── README.md                   # Project root
```
> **Note:** With npm workspaces, `node_modules` and `package-lock.json` are only in the root folder.

---
## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/gidsola/expressport.git
cd expressport
```

### 2. Install Dependencies
```bash
# Install all dependencies (root, frontend, and backend)
npm install
```
> **Note:** npm workspaces automatically link dependencies for both `client` and `server`.

---
## Development
### Run in Development Mode
```bash
# From the root folder
npm run dev
```
- **Frontend**: Vite dev server at `http://localhost:5173` (or similar)
- **Backend**: Express server at `http://localhost:3000` (or as configured)
- **API Proxy**: Frontend requests to `/api/*` are proxied to Express.

---
## Production
### Build and Run
```bash
# Build the frontend
npm run build
# Start the Express server (serves frontend + API)
npm start
```
- The app will be served at `http://localhost:3000` (or as configured).

---
## API Endpoints
| Endpoint          | Method | Description                               |
|-------------------|--------|-------------------------------------------|
| `/api/links`      |  GET   | this is a test endpoint for initial setup |

---
## Scripts
| Script       | Description                                  |
|--------------|----------------------------------------------|
| `npm run dev` | Run frontend + backend in development.       |
| `npm run build`| Build the frontend for production.         |
| `npm start`  | Start the Express server in production mode. |

---
## Tech Stack
- **Frontend**: Vite, React
- **Backend**: Express.js, Node.js
- **Proxy**: Vite proxies `/api` requests to Express in development.
- **Monorepo**: npm workspaces for dependency management.  
