export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://fafsa-guide-backend.herokuapp.com'
    : 'http://localhost:1337';
