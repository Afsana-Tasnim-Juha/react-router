import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About> </About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        element: <Users></Users>
      }
    ]
  },
  {
    path: "header",
    element: <Header></Header>
  },

  {
    path: "about",
    element: <div>I am in the about page</div>
  },
  {
    path: "contact",
    element: <div>Call me right now</div>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
