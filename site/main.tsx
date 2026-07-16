import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DanaDaruratCarousel } from "../examples/DanaDaruratCarousel";
import "../src/styles.css";
import "./site.css";

function App() {
  return (
    <div className="site">
      <header className="site__header">
        <h1>OCBC Design System</h1>
        <p>
          Live components from <code>ocbc-design-system</code>, rendered as the worked
          "Dana Darurat" IG carousel example.
        </p>
      </header>
      <main>
        <DanaDaruratCarousel />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
