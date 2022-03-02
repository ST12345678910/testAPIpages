const homeScreenbg = document.getElementById('movies')

const config = {
  api_key: '8bb7ff26c787b44f4d7c77a6ef8dfb70',
  api_base_url: 'https://api.themoviedb.org/3/',
  image_base_url: 'https://image.tmdb.org/t/p/w185'
}

const BASE_URL = config.api_base_url
const API_KEY = config.api_key

export async function currentPopular(page = 1) {
  let data = []
  try {
    const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
    const responseData = await response.json()
    data = responseData?.results
  } catch (error) {

  }
  return data
}

export async function presentPosters() {
  const movies = await currentPopular()
  console.log(homeScreenbg)
  homeScreenbg.innerHTML = movies?.map(movie => singlePoster(movie)).join("")
}

function singlePoster(movie) {
  return (
    `
        
            <img src="${config.image_base_url + movie?.poster_path}" id="posterBack" class="img-fluid">
        
        `
  )
}

function App() {
  presentPosters()
}
App()