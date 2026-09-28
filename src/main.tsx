import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from './pages/HomePages';
import { PlansTypePage } from './pages/PlansTypePage';
import { MorePages } from './pages/MorePages';
import { ContactPages } from './pages/ContactPages';


const root = createBrowserRouter([
  { path: '/', element: <App />,

    children:[
      { index: true, element: <HomePages /> },
      {path: "plans-type-page", element: <PlansTypePage />},
      {path: "more-pages", element: <MorePages />},
      {path: "contact-pages", element: <ContactPages />}

    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={root} />
  </StrictMode>,
)
