{
  "name": "landscaping-site",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GreenScape Landscaping</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
  import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 export default function App() {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <header style={{ padding: 20, display: "flex", justifyContent: "space-between", background: "#fff", borderBottom: "1px solid #ddd" }}>
        <h1 style={{ color: "#1b5e20" }}>GreenScape Landscaping</h1>
        <nav>
          <a href="#services" style={{ margin: 10 }}>Services</a>
          <a href="#about" style={{ margin: 10 }}>About</a>
          <a href="#contact" style={{ margin: 10 }}>Contact</a>
        </nav>
      </header>

      <section style={{ padding: 80, textAlign: "center", background: "#2e7d32", color: "white" }}>
        <h2>Beautiful Outdoor Spaces</h2>
        <p>Professional landscaping, lawn care, and garden design</p>
      </section>

      <section id="services" style={{ padding: 50 }}>
        <h2>Services</h2>
        <ul>
          <li>Lawn Maintenance</li>
          <li>Garden Design</li>
          <li>Tree & Shrub Care</li>
        </ul>
      </section>

      <section id="about" style={{ padding: 50, background: "#f4f4f4" }}>
        <h2>About Us</h2>
        <p>We create clean, modern, and beautiful outdoor spaces for homes and businesses.</p>
      </section>

      <section id="contact" style={{ padding: 50 }}>
        <h2>Contact</h2>
        <p>Email: info@greenscape.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      <footer style={{ textAlign: "center", padding: 20, background: "#fff" }}>
        <p>© 2026 GreenScape Landscaping</p>
      </footer>
    </div>
  );
} 
