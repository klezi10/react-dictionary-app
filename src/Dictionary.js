import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <label>What word do you want to look up?</label>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a word"
            className="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
        <p className="hint">example: wine, coding, pilates</p>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
