import axios from 'axios'

export const useMovieDetails = (id: number) => {
  const fetch = async (id: number) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=21580cb65127517a2a38e70292a53ab3&language=en-US`
      )
      return res.data
    } catch (err) {
      return err
    }
  }

  return fetch(id)
}
