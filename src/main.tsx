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
import { AnimeProvider } from './context/AnimeProvider.tsx';
import './index.css';
const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >

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
