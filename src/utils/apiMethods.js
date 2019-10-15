import { API_HOST } from '../constants/api';
import { request } from './request';

export const createNewGame = () => request('POST', `${API_HOST}/games/`, {"height": 10, "width": 10, "count": 10});

export const revealCell = ({ gameId, coordinates }) => request('POST', `${API_HOST}/games/${gameId}/reveal`, coordinates);
