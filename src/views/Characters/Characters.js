import React, { useEffect, useState } from 'react';
import CharactersComp from '../../components/Characters/CharactersComp';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters('All', []);
      setCharacters(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CharactersComp characters={characters} />
    </div>
  );
}
