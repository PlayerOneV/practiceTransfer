import axios, { type AxiosResponse } from 'axios'
import { ref } from 'vue'

export const useFetchMovies = () => {
  const data = ref<any>(null)
  const error = ref<any>(null)

  const fetch = async () => {
    try {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=21580cb65127517a2a38e70292a53ab3&language=en-US&page=1'
      )
      data.value = res.data.results
      console.log(res.data.results);
      
    } catch (err) {
      error.value = err
    }
  }

  fetch()

  return data.value
}
