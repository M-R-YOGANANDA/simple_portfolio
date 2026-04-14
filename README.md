# React + Vite Starter

This project is a minimal setup for building a React application using Vite with Hot Module Replacement (HMR) and basic ESLint configuration.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173/
```

---

## 📦 Available Scripts

* `npm run dev`
  Starts the development server with HMR.

* `npm run build`
  Builds the app for production.

* `npm run preview`
  Previews the production build locally.

* `npm run lint`
  Runs ESLint to check code quality.

---

## ⚙️ Project Setup

This project uses:

* React for building UI
* Vite for fast development and build tooling
* ESLint for linting and code quality

---

## 🔌 Plugins Used

* **@vitejs/plugin-react**
  Uses Babel for Fast Refresh

**OR**

* **@vitejs/plugin-react-swc**
  Uses SWC for Fast Refresh (faster alternative)

> Note: React Compiler is currently not compatible with SWC.

---

## 📁 Project Structure

```
project-root/
│── public/
│── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── vite.config.js
```

---

## 🛠️ Recommended Improvements

For production applications:

* Use TypeScript
* Enable type-aware linting with typescript-eslint
* Add testing (e.g., Jest or Vitest)

---

## 📚 Learn More

* https://vitejs.dev/
* https://react.dev/

---

## 📄 License

This project is open source and available under the MIT License.
