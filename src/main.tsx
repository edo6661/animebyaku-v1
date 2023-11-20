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
import AnimeReviews from './components/AnimeReview/AnimeReviews.tsx';
import NotFound from './components/NotFound.tsx';
import { AnimeProvider } from './context/AnimeProvider.tsx';
import './index.css';
import AllAnimeCharacters from './pages/AllAnimeCharacters.tsx';
import AllAnimeStaff from './pages/AllAnimeStaff.tsx';
import AllTopAnime from './pages/AllTopAnime.tsx';
import AllTopManga from './pages/AllTopManga.tsx';
import AnimeSeason from './pages/AnimeSeason.tsx';
import HomeSingleAnime from './pages/HomeSingleAnime.tsx';
import Homepage from './pages/Homepage.tsx';
import HomepageSeason from './pages/HomepageSeason.tsx';
import Recommendation from './pages/Recommendation.tsx';
import Season from './pages/Season.tsx';
import SeasonNow from './pages/SeasonNow.tsx';
import SingleAnime from './pages/SingleAnime.tsx';
import SingleManga from './pages/SingleManga.tsx';
import UpComing from './pages/UpComing.tsx';
import AllMangaCharacters from './pages/manga/AllMangaCharacters.tsx';
import AllMangaRecom from './pages/manga/AllMangaRecom.tsx';
import AllMangaStaff from './pages/manga/AllMangaStaff.tsx';
import HomeSingleManga from './pages/manga/HomeSingleManga.tsx';
import MangaReviews from './pages/manga/MangaReviews.tsx';

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
        <Route path="characters" element={<AllAnimeCharacters />} />
        <Route path="staff" element={<AllAnimeStaff />} />

      </Route>
      <Route path={`manga/:mal_id`} element={<SingleManga />}>
        <Route index element={<HomeSingleManga />} />
        <Route path="recommendations" element={<AllMangaRecom />} />
        <Route path="reviews" element={<MangaReviews />} />
        <Route path="characters" element={<AllMangaCharacters />} />
        <Route path="staff" element={<AllMangaStaff />} />
      </Route>

      <Route path="/topAnime" element={<AllTopAnime />} />

      <Route path="/topManga" element={<AllTopManga />} />

      <Route path="/season" element={<AnimeSeason />} >
        <Route index element={<HomepageSeason />} />
        <Route path="upComing" element={<UpComing />} />
        <Route path="seasonNow" element={<SeasonNow />} />
        <Route path="season" element={<Season />} />
        <Route path="recommendation" element={<Recommendation />} />
      </Route>

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
