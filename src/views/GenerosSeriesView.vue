<script setup>
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'

const series = ref([])
const props = defineProps({
  id: Number
})

onMounted(async () => {
  const movieDetails = await fetchMovieDetails(props.id)
  series.value = movieDetails.results
})

const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(
      `discover/tv?include_adult=false&include_video=false&with_genres=${id}&page=1`,
      {
        params: {
          language: 'pt-BR',
          sort_by: 'popularity.desc'
        }
      }
    )
    return response.data
  } catch (error) {
    console.error('Erro ao buscar os detalhes do filme:', error)
    return {}
  }
}
</script>

<template>
    <div class="populares">
      <div id="popularesCartaz">
        <div v-for="movie in series" :key="movie.id" class="cartazFilmes">
          <router-link :to="`/Solos/${movie.id}`"
            ><img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"
          /></router-link>
        </div>
      </div>
    </div>
</template>

<style scoped>
.cartazFilmes img:hover {
  opacity: 0.6;
  transition: 0.4s ease;
  backface-visibility: hidden;
  background-color: #8c4ffd;
}
.populares {
  margin-left: 6%;
}
#popularesCartaz {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cartazFilmes {
  margin-left: 2%;
  align-items: center;
  text-align: justify;
  margin-top: 2%;
}

.cartazFilmes img {
  height: 500px;
  border-radius: 15px;
  border: solid rgb(159, 43, 226) 3px;
 
  border-radius: 10px;
}
</style>
