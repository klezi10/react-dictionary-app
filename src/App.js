import './App.css';
import Dictionary from './Dictionary';
import research from './research.png';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={research} alt="Logo" className="logo" />
          <h1>Digital Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="beach" />
        </main>
        <footer className="text-center">
          <small>
            This project was coded by{' '}
            <a
              href="https://clever-turing-3f9e94.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Portfolio"
            >
              {' '}
              Klesta Luli{' '}
            </a>{' '}
            |{' '}
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
