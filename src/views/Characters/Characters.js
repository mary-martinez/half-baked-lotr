import React, { useEffect, useState } from 'react';
import CharactersComp from '../../components/Characters/CharactersComp';
import Dropdown from '../../components/Dropdown/Dropdown';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, []);
      setCharacters(data);
    };
    fetchData();
  }, [race]);

  return (
    <div>
      <Dropdown setRace={setRace} race={race} />
      <CharactersComp characters={characters} />
    </div>
  );
}
