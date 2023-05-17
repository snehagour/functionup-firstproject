import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Page from './Component/Page'
import Navebar from './Component/Navebar';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navebar />,
  },
  {
    path: "/Page",
    element: <Page/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
