import './App.css';
import Dictionary from './Dictionary';
import research from './research.png';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={research} alt="Logo" />
        </header>
        <main>
          <Dictionary defaultWord="beach" />
        </main>
        <footer className="text-center">
          <small>
            This project was coded by Klesta |{' '}
            <a
              href="https://github.com/klezi10/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
              title="GitHub code"
            >
              Open-source
            </a>{' '}
          </small>
        </footer>
      </div>
    </div>
  );
}
