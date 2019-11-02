export const api = 'f79c1f33b89b8f1e137114c46a4df913'
const baseURl = `https://api.themoviedb.org/3`

export const mountURL = `${baseURl}/trending/movie/day?api_key=${api}`
export const changeURL = `${baseURl}/search/movie?query=`
export const fallBackURL = `${baseURl}/trending/tv/week?api_key=${api}`
export const genreURL = `${baseURl}/genre/movie/list?language=en-US&api_key=${api}`