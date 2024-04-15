import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/layout/Layout';
import Home from './routes/home/Home';
import Game from './routes/game/Game';
import Classic from './routes/classic/Classic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/game',
          element: <Game />,
        },
        {
          path: '/classic',
          element: <Classic />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
