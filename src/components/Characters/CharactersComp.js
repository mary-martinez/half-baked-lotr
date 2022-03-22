import React from 'react';

export default function CharactersComp({ characters }) {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id} className='character'>
          <h3>{character.name}</h3>
          <p>{character.race}</p>
        </div>
      ))}
    </div>
  );
}
