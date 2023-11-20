<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";
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




onMounted(async () => {
  const response = await api.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
  movies.value = response.data.results
})







</script>

<template>
  
  <main>
    <router-view />
  </main>
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

<nav class="navbar  ">
  <div class="container-fluid">
  </div>

  
<button class="btn btn-primary offcanva" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Gêneros</button>
<router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Séries</router-link>
      <router-link to="/">Home</router-link>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h1>Filmes</h1>
  <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
    {{ genre.name }}
</li>
  </ul>
  </div>
</div>
</nav>




  <loading v-model:active="isLoading" is-full-page />

  <div class="populares">
    <h1>Os mais populares</h1>
    <div id="popularesCartaz">
  <div v-for="movie in movies" :key="movie.id" class="cartazFilmes">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
      <p class="tituloDeMovie">{{ movie.title }}</p>
    </div>
    
  </div>
</div>




  <div class="populares">
      <h1>Os mais populares</h1>
      <div id="popularesCartaz">
        <div v-for="movie in movies" :key="movie.id" class="cartazFilmes">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
          <p class="tituloDeMovie">{{ movie.title }}</p>
          
        </div>
      </div>
    </div>

    <div class="populares">
      <h1>Os mais populares</h1>
      <div id="popularesCartaz">
        <div v-for="movie in movies" :key="movie.id" class="cartazFilmes">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
          <p class="tituloDeMovie">{{ movie.title }}</p>
        </div>
      </div>
    </div>

    <div class="populares">
      <h1>Os mais populares</h1>
      <div id="popularesCartaz">
        <div v-for="movie in movies" :key="movie.id" class="cartazFilmes">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
          <p class="tituloDeMovie">{{ movie.title }}</p>
        </div>
      </div>
    </div>
</template>



<style scoped>
.offcanva:hover{
background-color: rgb(7, 0, 68);
transition: 0.5s;
}
.navbar {
  background-color: rgb(1, 2, 19);
}
.offcanva{
  border-radius: 20px;
  margin-left: 15px;
  border-color: rgb(35, 45, 175);
  color: white;
  background-color: transparent;
  
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
  text-decoration: none;
}
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
.trailer{
  border-radius: 20px;
  border: solid 5px;
  border-color: rgb(35, 45, 175);
  background: transparent;
  font-size: 25px;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 25px;
}

.trailer:hover{
  background-color: purple;
  color: black;
  transition: 0.7s;
  color: white;
  border-color: rgb(120, 47, 255);
}
.logos2{
  width: 300px;
  
  margin-bottom: 20px;
  
}
.logos{
  width: 400px;
  margin-bottom: 20px;
}

.logos3{
  width: 700px;
  margin-bottom: 20px;
}



.populares h1{
  margin-top: 30px;
  font-size: 30px;
  margin-bottom: 30px;
  color: white;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
  text-decoration: none;
  
}
.populares {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  max-width: 1200px;
}

#popularesCartaz {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin: 0 auto;
  /* flex-wrap: wrap; */
  width: 98vw;
  column-count: 2;
  color: white;

}

#popularesCartaz::-webkit-scrollbar {
  height: 5px;
  border: 2px solid #d5d5d5;
  border-radius: 40%;
}

#popularesCartaz::-webkit-scrollbar-track {  
  /* border-radius: 0; */
  background: rgb(39, 0, 90)}

#popularesCartaz::-webkit-scrollbar-thumb {
  /* border-radius: 0; */
  background: rgb(159, 43, 226)
} 

.cartazFilmes {
  margin: 0 10px;
  min-height: 200px;
  

}

.cartazFilmes img {
  width: 10vw;
  border-radius: 10px;
}

.cartazFilmes:hover {
  border: solid rgb(159, 43, 226) 3px;
  border-radius: 12px;
  transition: .1s;
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