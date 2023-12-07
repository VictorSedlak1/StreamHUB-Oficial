<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";


const genres = ref([])

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})

const acao = ref([]);



onMounted(async () => {
  const resp_acao = await api.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_genres=28&language=pt-BR&page=1&sort_by=popularity.desc');
  acao.value = resp_acao.data.results
})
</script>

<template>
   <div class="populares">
      <h1>Ação</h1>
      <div id="popularesCartaz">
        <div v-for="movie in acao" :key="movie.id" class="cartazFilmes">
          <router-link :to="`/Solos/${movie.id}`"><img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" /></router-link>
          <p class="tituloDeMovie">{{ movie.title }}</p>
          
        </div>
      </div>
    </div>
</template>

<style scoped>
.populares {
  /* Adicione estilos para o contêiner principal conforme necessário */
}

.filme-container {
  max-width: 100%; /* O contêiner ocupará no máximo 100% da largura da tela */
  overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
}

.filme-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px; /* Espaçamento entre as colunas, ajuste conforme necessário */
}

.cartazFilmes {
  /* Estilos para os cartazes dos filmes, ajuste conforme necessário */
  text-align: center;
}
</style>
