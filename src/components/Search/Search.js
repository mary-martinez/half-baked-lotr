import React from 'react';

export default function Search({ search, setSearch, setName }) {
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={() => setName(search)}>Search</button>
    </div>
  );
}
