<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";

const movies = ref([])

onMounted(async () => {
  const response = await api.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
  movies.value = response.data.results
})




</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>

  <div class="populares">
      <h1>Populares,</h1>
      <h2>Apenas os melhores!</h2>
      <div id="popularesCartaz">
        <div v-for="movie in movies" :key="movie.id" class="cartazFilmes">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
          <p class="tituloDeMovie">{{ movie.title }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.populares {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
}

#popularesCartaz {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  column-count: 2;
}

.cartazFilmes {
  margin: 0 10px;
}

.cartazFilmes {
  margin: 0 10px;
  min-height: 200px;
}
nav {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  column-gap: 2rem;
}

header {
  height: 3rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}
</style>