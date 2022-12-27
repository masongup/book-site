import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import './App.css';
import { BookList, bookListLoader } from './BookList';
import { BookDetails, bookLoader } from './BookDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <h1>A Book List Site</h1>
        <Link to="/books">Book List</Link>
        <Outlet />
      </div>,
      children: [
        {
          path: '/books',
          loader: bookListLoader,
          element: <BookList />
        },
        {
          path: '/books/:bookId',
          loader: bookLoader,
          element: <BookDetails />
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
