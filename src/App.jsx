import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import githubLogo from "./assets/github.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://docs.github.com/" target="_blank" rel="noreferrer">
          <img src={githubLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + GitHub Pages</h1>
    </>
  );
}

export default App;
