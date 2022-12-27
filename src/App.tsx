import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import './App.css';
import { BookList, bookLoader } from './BookList';

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
          loader: bookLoader,
          element: <BookList />
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
