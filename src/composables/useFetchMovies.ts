import axios, { type AxiosResponse } from 'axios'

export const useFetchMovies = () => {
  const fetch = async () => {
    try {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=21580cb65127517a2a38e70292a53ab3&language=en-US&page=1'
      )
      return res.data.results
    } catch (err) {
      return err
    }
  }

  return fetch()
}
