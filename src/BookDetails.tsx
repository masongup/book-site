import { useLoaderData, Link } from 'react-router-dom';
import { apiBaseLocation, apiBook } from './common';

export async function bookLoader({ params }: any) {
  const response = await fetch(`${apiBaseLocation}books?select=*,authors(*)&id=eq.${params.bookId}`);
  const data = await response.json();
  return { book: data[0] }
}

export function BookDetails() {
  const loaderData: any = useLoaderData();
  const book = loaderData.book as apiBook;
  return <div>
    <Link to='/books'>Back to list</Link>
    <ul>
      <li>Book Title: {book.title}</li>
      <li>Book Author: {book.authors.name}</li>
      <li>Book Summary: {book.description}</li>
    </ul>
  </div>;
}
