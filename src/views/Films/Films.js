import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';
import FilmsComp from '../../components/Films/FilmsComp';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <FilmsComp films={films} />
    </div>
  );
}
