ShadowTrace — Know Your Digital Footprint
ShadowTrace is an educational AI-powered web platform that simulates digital footprint and exposure analysis.
It helps users understand how publicly available data can contribute to digital exposure, using AI-driven insights.
⚠️ Disclaimer:
ShadowTrace is built strictly for educational and awareness purposes.
It does not perform real OSINT, hacking, or private data collection.
✨ Features
🧠 AI-powered exposure analysis (Gemini API)
📊 Exposure index scoring (0–100)
📈 Visual reports & clean UI
⚡ Fast Vite + React frontend
🐍 Python Flask backend
🔐 Secure environment variable handling
🌍 Ready for cloud deployment (Render + Vercel)
🧱 Tech Stack
Frontend
React + TypeScript
Vite
Modern component-based UI
Backend
Python (Flask)
Gemini AI API
REST API architecture
DevOps
Git & GitHub
Environment-based configuration
Render (backend)
Vercel / Netlify (frontend)
📁 Project Structure
shadowtrace-ai/
│
├── backend/
│   ├── app.py
│   ├── ai_engine.py
│   ├── requirements.txt
│   └── .env.local (ignored)
│
├── components/
├── pages/
├── services/
├── public/
├── App.tsx
├── index.tsx
├── package.json
└── README.md
⚙️ Environment Variables
Backend (backend/.env.local)
Copy code
Env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
❌ Never commit .env or .env.local
✅ Managed securely during deployment
🚀 Run Locally
1️⃣ Backend
Copy code
Bash
cd backend
pip install -r requirements.txt
python app.py
Backend runs on:
Copy code

http://127.0.0.1:5000
Health check:
Copy code

GET /health
2️⃣ Frontend
npm install
npm run dev
Frontend runs on:
http://localhost:3000
🔌 API Integration
Frontend communicates with backend using:
Env
VITE_API_URL=http://127.0.0.1:5000
This value is replaced with the production backend URL after deployment.
🌍 Deployment Plan
Backend: Render (Python Web Service)
Frontend: Vercel
Secrets: Managed via platform environment variables
Full deployment guide coming soon 🚀
📸 Screenshots
(Add screenshots here after deployment)
🛡️ License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it with attribution.
👤 Author
Faizan Raza
💻 Developer | AI & Web Enthusiast
⭐ Support
If you like this project:
⭐ Star the repository
🍴 Fork it
🧠 Learn & build responsibly
🔚 Final Notes
ShadowTrace is built to educate, not exploit.
Understanding digital exposure is the first step toward digital safety.
