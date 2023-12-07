<script setup>
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'


const movies = ref([])
const props = defineProps({
  id: Number
})

onMounted(async () => {
  const movieDetails = await fetchMovieDetails(props.id)
  movies.value = [movieDetails]
})

const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(`movie/${id}`, {
      params: {
        language: 'pt-BR'
      }
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar os detalhes do filme:', error)
    return {}
  }
}
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
</script>

<template>
  
  <div v-for="movie in movies" :key="movie.id">
    <div class="backdrop">
      <div class="container-main">
        <div class="container-movie z-3">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
            width="300"
            class="img-movie"
          />
          
          <div class="info-movie">
            <h1 class="title">{{ movie.title }}</h1>
            <p class="movie-date mt-3 mb-3">{{ formatDate(movie.release_date) }}</p>
            <p class="mt-4">Avaliações de Usúario</p>
            <p>{{ movie.vote_average }}</p>
            <h2 class="sinopse mt-7">Sinopse</h2>
            <p class="mt-3">{{ movie.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

.container-main {
  background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 25%, rgba(12,12,128,1) 50%, rgba(159,43,226,1) 100%);
  max-width: 100%;
  clear: both;
  margin: 0 auto;
}

.container-movie {
  display: flex;
  margin-left: 100px;
}

.title {
  font-weight: bold;
  font-size: 42px;
}
.trailer {
  font-size: 22px;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.img-movie {
  border-radius: 10px;
  margin-top: 3.5em;
  margin-bottom: 3.5em;
  border: groove;
  border-color: rgb(159, 43, 226);
  margin-right: 100px;
}
.info-movie {
  padding: 15px;
  margin-top: 4.5em;
  text-align: center;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.sinopse {
  font-size: 25px;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.backdrop {
  background-color: black;
  color: white;
}

</style>