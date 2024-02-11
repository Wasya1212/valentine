import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home.jsx';
import Level1 from './Level1.jsx';
import Level2 from './Level2.jsx';
import Level3 from './Level3.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/level1",
    element: <Level1 />,
  },
  {
    path: "/level2",
    element: <Level2 />,
  },
  {
    path: "/level3",
    element: <Level3 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
