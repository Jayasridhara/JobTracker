import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Jobs from './pages/Jobs';
import jobLoader from './loader/jobsLoader';

function App() {
  const routes = [
   {
    path: '/',
    element: <Jobs />,
    loader: jobLoader,
    hydrateFallbackElement: <div>Loading jobs...</div>,
  },

]

  const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
  return (
    <div>
       <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
    </div>
  )
}

export default App