import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HroPage from './pages/HroPage';
import NotFound from './pages/NotFound';
import CrimsonPage from './pages/Crimson';
import BandWithNoNamePage from './pages/BandWithNoName';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      // Placeholder routes for future project pages
      {
        path: 'harvard-crimson',
        Component: CrimsonPage,
      },
      {
        path: 'band-no-name',
        Component: BandWithNoNamePage,
      },
      {
        path: 'hro',
        Component: HroPage,
      },
      {
        path: 'lowell-opera',
        element: (
          <div className="type-inter-14 p-16">
            <h1 className="type-xanh-32 mb-4">Lowell House Opera</h1>
            <p>Project page coming soon...</p>
          </div>
        ),
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
