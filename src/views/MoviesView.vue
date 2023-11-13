<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

const getGenreName = (id) => genres.value.find((genre) => genre.id === id).name

const isLoading = ref(false);

const genres = ref([])

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})

const movies = ref([]);

const listMovies = async (genreId) => {
  isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  movies.value = response.data.results
  isLoading.value = false;
};
</script>
<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../components/img/fnaf3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption position">
        <img src="../components/img/fnaflogo.jpg" class="logos" alt="">
        <h5>STREAMHUB</h5>
        <p>Os melhores filmes e séries você encontra aqui.</p>
        <button class="trailer">Ver trailer</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../components/img/panico.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption position">
        <img src="../components/img/finalmente.jpg" class="logos2" alt="">
        <h5>STREAMHUB</h5>
        <p>Os melhores filmes e séries você encontra aqui.</p>
        <button class="trailer">Ver trailer</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../components/img/open.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption position">
        <img src="../components/img/openlogo2.jpg" class="logos3" alt="">
        <h5>STREAMHUB</h5>
        <p>Os melhores filmes e séries você encontra aqui.</p>
        <button class="trailer">Ver trailer</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <h1>Filmes</h1>
  <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
    {{ genre.name }}
</li>
  </ul>
  <loading v-model:active="isLoading" is-full-page />

  <div class="movie-list">
  <div v-for="movie in movies" :key="movie.id" class="movie-card">
    
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
    <div class="movie-details">
      <p class="movie-title">{{ movie.title }}</p>
      <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
      <p class="movie-genres">
  <span v-for="genre_id in movie.genre_ids" :key="genre_id" @click="listMovies(genre_id)">
    {{ getGenreName(genre_id) }} 
  </span>
</p>
    </div>
    
  </div>
</div>
</template>

<style scoped>
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}

.genre-item {
  background-color: #387250;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #4e9e5f;
  box-shadow: 0 0 0.5rem #387250;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}

.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}
</style>