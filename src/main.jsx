import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import About from './components/About/About.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import jobDataLoader from './Loader/JobLoader.js';
import Feature from './components/Feature/Feature.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/feature:id',
        element: <Feature></Feature>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>,
        loader: jobDataLoader
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
