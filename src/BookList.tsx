import { useLoaderData, Link } from 'react-router-dom';

export async function bookLoader() {
  const response = await fetch('https://www.masongup.com/BookApi/books?order=id&select=id,title,authors(id,name)');
  const data = await response.json();
  return { books: data }
}

interface apiBook {
  id: number,
  title: string,
  authors: {
    id: number,
    name: string,
  }
}

export function BookList() {
  const loaderData: any = useLoaderData();
  const books = loaderData.books as Array<apiBook>;
  return <div>
    <Link to="/">Back to Home</Link>
    <table>
        <tr><th>Title</th><th>Author</th></tr>
        { books.map(b => <tr key={b.id}>
          <td>{b.title}</td>
          <td>{b.authors.name}</td>
        </tr> )}
    </table>
    </div>;
}
