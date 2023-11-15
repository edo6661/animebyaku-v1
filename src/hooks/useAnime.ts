import { useContext } from 'react';
import animeContext from '../context/animeContext';
const useAnime = () => {
	return useContext(animeContext);
};

export default useAnime;
