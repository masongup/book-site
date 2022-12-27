import { useLoaderData, Link } from 'react-router-dom';
import { apiBaseLocation, apiBook } from './common';

export async function bookListLoader() {
  const response = await fetch(`${apiBaseLocation}books?order=id&select=id,title,authors(id,name)`);
  const data = await response.json();
  return { books: data }
}

export function BookList() {
  const loaderData: any = useLoaderData();
  const books = loaderData.books as Array<apiBook>;
  return <div>
    <Link to="/">Back to Home</Link>
    <table>
        <tr><th>Title</th><th>Author</th></tr>
        { books.map(b => <tr key={b.id}>
          <td><Link to={`/books/${b.id}`}>{b.title}</Link></td>
          <td>{b.authors.name}</td>
        </tr> )}
    </table>
    </div>;
}
