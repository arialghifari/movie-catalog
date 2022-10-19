const CONFIG = {
  KEY: '4f7e619531b104898138f0f2eeb7011a',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'http://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'MovieCatalog-V1',
  DATABASE_NAME: 'movie-catalog-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
  PUSH_MSG_VAPID_PUBLIC_KEY:
    'BN7-r0Svv7CsTi18-OPYtJLVW0bfuZ1x1UtrygczKjennA_qs7OWmgOewcuYSYF3Gc_mPbqsDh2YoGCDPL0RxDQ',
  PUSH_MSG_SUBSCRIBE_URL:
    'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/subscribe',
  PUSH_MSG_UNSUBSCRIBE_URL:
    'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/unsubscribe',
};

export default CONFIG;
