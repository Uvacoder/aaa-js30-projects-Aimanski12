export const api = 'Enter your APIKEY here'


const baseURl = `https://api.themoviedb.org/3`

export const mountURL = `${baseURl}/trending/movie/day?api_key=${api}`
export const changeURL = `${baseURl}/search/movie?query=`
export const fallBackURL = `${baseURl}/trending/tv/week?api_key=${api}`
export const genreURL = `${baseURl}/genre/movie/list?language=en-US&api_key=${api}`