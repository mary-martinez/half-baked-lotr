import React from 'react';

export default function Films({ films }) {
  // console.log(films);
  return (
    <div>
      {films.map((film) => (
        <div key={film.id} className='film'>
          <h3>{film.title}</h3>
          <p>Box office total: {film.box_office_total}</p>
          <p>Academy award nominations: {film.academy_award_nominations}</p>
        </div>
      ))}
    </div>
  );
}
