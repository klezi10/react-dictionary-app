import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <label>What word do you want to look up?</label>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          class="form-control search-input"
          onChange={handleKeywordChange}
        />
      </form>
      <p className="hint">example: wine, coding, pilates</p>
      <Results results={results} />
    </div>
  );
}
