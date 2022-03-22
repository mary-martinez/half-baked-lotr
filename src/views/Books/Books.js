import React, { useEffect, useState } from 'react';
import BooksComp from '../../components/Books/BooksComp';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [error, setError] = useState('');
  const [books, setBooks] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchBooks();
        setBooks(data);
      };
      fetchData();
    } catch (e) {
      setError(e);
    }
  }, []);

  return (
    <div>
      <p>{error}</p>
      <BooksComp books={books} />
    </div>
  );
}
