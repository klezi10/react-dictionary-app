import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function changeKeyword(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordUpdate(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={changeKeyword}>
        <input type="search" onChange={handleKeywordUpdate} />
      </form>
    </div>
  );
}
