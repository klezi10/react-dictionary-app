import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Add image here</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            This project was coded by Klesta |{' '}
            <a href="/" target="_blank" rel="noreferrer">
              Open-source
            </a>{' '}
          </small>
        </footer>
      </div>
    </div>
  );
}
