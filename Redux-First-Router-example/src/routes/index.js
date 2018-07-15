import { fetchUserData } from '../state/user/actions';

export const routePaths = {
  'HOME': '/',
  'ABOUT': '/about',
  'PROFILE': { path: '/profile/:username', thunk: fetchUserData },
  'PORTFOLIO': '/portfolio',
  'TIMELINE': '/projects/timeline'
}