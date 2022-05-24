import React from 'react';

export default function BooksComp({ books }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}
