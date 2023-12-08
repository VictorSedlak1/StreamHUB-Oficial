<script setup>
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'

const movies = ref([])
const props = defineProps({
  id: Number
})

onMounted(async () => {
  const movieDetails = await fetchMovieDetails(props.id)
  movies.value = movieDetails.results
})

const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(
      `discover/movie?include_adult=false&include_video=false&with_genres=${id}&page=1`,
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
        <div v-for="movie in movies" :key="movie.id" class="cartazFilmes">
          <router-link :to="`/Solos/${movie.id}`"
            ><img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"
          /></router-link>
        </div>
      </div>
    </div>
</template>

<style scoped>
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
}
</style>
