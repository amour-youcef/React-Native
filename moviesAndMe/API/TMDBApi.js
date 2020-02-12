// API/TMDBApi.js
const API_TOKEN = "e111c692a86d2012a1a69b79365def50";

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }


  export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }