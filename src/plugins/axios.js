import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTc4ZjhiNTdmNTVjNDA1YmI0NGZlMDhiOGFlNTA5MyIsInN1YiI6IjY0ZmYxNTdmZGI0ZWQ2MTA0MzA4ODUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mo_m78cfTBFLSTeId2fF_Y1B88toh8_hwb_5KP83fac`
  }
})

export default api
