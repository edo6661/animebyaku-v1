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
import AllAnimeRecom from './components/AllAnimeRecom.tsx';
import AllTopAnime from './components/AllTopAnime.tsx';
import AnimeReviews from './components/AnimeReview/AnimeReviews.tsx';
import NotFound from './components/NotFound.tsx';
import { AnimeProvider } from './context/AnimeProvider.tsx';
import './index.css';
import HomeSingleAnime from './pages/HomeSingleAnime.tsx';
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
      <Route path={`anime/:mal_id`} element={<SingleAnime />}>
        <Route index element={<HomeSingleAnime />} />
        <Route path="recommendations" element={<AllAnimeRecom />} />
        <Route path="reviews" element={<AnimeReviews />} />

      </Route>
      <Route path={`manga/:mal_id`} element={<SingleManga />} />
      <Route path="/topAnime" element={<AllTopAnime />} />
      <Route path="*" element={<NotFound />} />
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
