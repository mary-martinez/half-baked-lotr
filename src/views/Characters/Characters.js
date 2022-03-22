import React, { useEffect, useState } from 'react';
import CharactersComp from '../../components/Characters/CharactersComp';
import Dropdown from '../../components/Dropdown/Dropdown';
import Search from '../../components/Search/Search';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, name);
      setCharacters(data);
    };
    fetchData();
  }, [race, name]);

  return (
    <div>
      <Dropdown setRace={setRace} race={race} />
      <Search {...{ search, setSearch, setName }} />
      <CharactersComp characters={characters} />
    </div>
  );
}
