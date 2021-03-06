import React from 'react';
import './FilmsComp.css';
export default function Films({ films }) {
  // console.log(films);

  return (
    <div className='films-container'>
      {films.map((film) => (
        <div key={film.id} className='film'>
          <h3>{film.title}</h3>
          <img src={`${process.env.PUBLIC_URL}/films/${film.title.replaceAll(' ', '-').toLowerCase()}.jpeg`} />
          <p>Box office total: {film.box_office_total}</p>
          <p>Academy award nominations: {film.academy_award_nominations}</p>
        </div>
      ))}
    </div>
  );
}
