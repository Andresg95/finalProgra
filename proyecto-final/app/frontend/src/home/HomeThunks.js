import axios from 'axios';
import { setPosters } from './HomeActions';

// eslint-disable-next-line import/prefer-default-export
export const fetchPosters = genre => async (dispatch) => {
  const { data: posters } = await axios.get(
    `http://${process.env.API_URL}/movies/landing/?genre=${genre}`,
  );

  dispatch(setPosters(posters));
};
