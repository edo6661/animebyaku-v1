import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.tsx';
import AllTopAnime from './components/AllTopAnime.tsx';
import AllTopManga from './components/AllTopManga.tsx';
import { AnimeProvider } from './context/AnimeProvider.tsx';
import './index.css';
import Homepage from './pages/Homepage.tsx';
import SingleAnime from './pages/SingleAnime.tsx';
import SingleManga from './pages/SingleManga.tsx';
const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        index
        element={<Homepage />} />
      <Route path={`anime/:mal_id`} element={<SingleAnime />} />
      <Route path={`manga/:mal_id`} element={<SingleManga />} />
      <Route path="/topAnime" element={<AllTopAnime />} />
      <Route path="/topManga" element={<AllTopManga />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AnimeProvider>
      <RouterProvider router={router} />
    </AnimeProvider>
    <ReactQueryDevtools buttonPosition='bottom-left' />
  </QueryClientProvider>
)
