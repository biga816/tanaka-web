import { environment } from '../../../environments/environment';

/** API URL */
const BASE_URL = environment.wpUrl;

export const API = {
  'URL': {
    'POSTS': `${BASE_URL}posts`,
    'USERS': `${BASE_URL}users`
  },
  'SETTING': {
    'PER': 10
  }
};

export const URLS = {
  FACEBOOK: 'https://www.facebook.com/akihiro.tanaka.94',
  INSTAGRAM: 'https://www.instagram.com/biga816/',
  GITHUB: 'https://github.com/biga816'
};
