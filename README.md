# Pomo-Kan ⏱🧠

A responsive, theme-adaptive web app designed to help users stay productive using a Pomodoro timer system and an integrated Kanban board. Built with React and Tailwind CSS.

## 🎥 Demo

<video src="https://github.com/user-attachments/assets/78e29134-878a-479d-9c71-384933de3364" ></video>

## 🧩 Features

- ⏳ **Timer Component**: Central productivity timer 
- ✅ **Kanban Board**: Visual task tracker to stay on top of your goals 
- 🧠 **Focus Mode Context**: Dynamically change background color based on Pomodoro status (`focus`, `short-break`, `long-break`)

## 🛠️ Tech Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **State Management**: React Context API

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/egramsdoescode/pomo-kan.git
cd pomo-kan 
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

> Assumes you are using [Vite](https://vitejs.dev/) — adjust accordingly if not.

## 🔮 Customization

You can update the theme colors in `Home.jsx` by modifying the `focusStyles` logic.

```js
"bg-[#f38ba8]": focusMode === "focus",        // Pink
"bg-[#cba6f7]": focusMode === "short-break",  // Purple
"bg-[#89b4fa]": focusMode === "long-break",   // Blue
```

## 🧪 TODO

- Add functionality to the `Login` and `SignUp` components.
- Implement `Timer` and `Kanban` components.
- Add persistent storage (e.g., Firebase, Supabase).
- Deploy the app 

## 📜 License

MIT License © 2025 Ethan Grams 
