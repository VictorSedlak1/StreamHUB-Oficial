<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";
import Loading from 'vue-loading-overlay'


const isLoading = ref(false);

const genres = ref([])

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})

const movies = ref([]);
const kids = ref([]);
const atual = ref('Os mais populares');
const cartaz = ref([]);
const avaliados = ref([]);

const listMovies = async (genre) => {
  isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genre.id,
      language: 'pt-BR'
    }
  });
  movies.value = response.data.results
  atual.value = genre.name
  isLoading.value = false;
};




onMounted(async () => {
  const response = await api.get('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1' );
  movies.value = response.data.results
  
  const resp_kids = await api.get('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1' );
  kids.value = resp_kids.data.results

  const resp_cartaz = await api.get('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1' );
  cartaz.value = resp_cartaz.data.results

  const resp_avaliados = await api.get('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1' );
  avaliados.value = resp_avaliados.data.results
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
<router-link to="/inicio">Filmes</router-link>
      <router-link to="/">Home</router-link>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filmes</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h1>Gêneros</h1>
  <ul class="genre-list">
    <p v-for="genre in genres" :key="genre.id" @click="listMovies(genre)" class="genre-item">
      <router-link :to="`/GeneroTv/${genre.id}`"
          >{{ genre.name }} {{ genre.id }}</router-link>
    </p>
  </ul>
  </div>
</div>
</nav>




  <loading v-model:active="isLoading" is-full-page />

  <div class="populares">
    <h1>Melhores Avaliados</h1>
    <div id="popularesCartaz">
  <div v-for="movie in movies" :key="movie.id" class="cartazFilmes">
    <router-link :to="`/SolosTv/${movie.id}`"><img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" /></router-link>
      <p class="tituloDeMovie">{{ movie.name }}</p>
    </div>
    
  </div>
</div>




  <div class="populares">
      <h1>Na TV</h1>
      <div id="popularesCartaz">
        <div v-for="movie in kids" :key="movie.id" class="cartazFilmes">
          <router-link :to="`/SolosTv/${movie.id}`"><img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" /></router-link>
          <p class="tituloDeMovie">{{ movie.name }}</p>
          
        </div>
      </div>
    </div>

    <div class="populares">
      <h1>Mais populares</h1>
      <div id="popularesCartaz">
        <div v-for="movie in cartaz" :key="movie.id" class="cartazFilmes">
          <router-link :to="`/SolosTv/${movie.id}`"><img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" /></router-link>
          <p class="tituloDeMovie">{{ movie.name }}</p>
        </div>
      </div>
    </div>

    <div class="populares">
      <h1>Recomendados</h1>
      <div id="popularesCartaz">
        <div v-for="movie in avaliados" :key="movie.id" class="cartazFilmes">
          <router-link :to="`/SolosTv/${movie.id}`"><img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" /></router-link>
          <p class="tituloDeMovie">{{ movie.name }}</p>
        </div>
      </div>
    </div>
</template>



<style scoped>
#popularesCartaz {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin: 0 auto;
  /* flex-wrap: wrap; */
  width: 98vw;
  column-count: 2;
  color: white;
  height: 22vw;
  background: rgb(1,3,24);
background: linear-gradient(0deg, rgba(1,3,24,1) 5%, rgba(11,11,91,1) 50%, rgba(1,3,24,1) 95%);

}
.cartazFilmes img{
  border: solid rgb(159, 43, 226) 3px;
  width: 10vw;
  border-radius: 10px;
}
.cartazFilmes img:hover{
  margin-top: 15px;
  opacity: 0.6;
  transition: 0.4s ease;
  backface-visibility: hidden;
  background-color: #8c4ffd;
}

.cartazFilmes:hover {
  margin: 0 10px;
  min-height: 98px;
  

}
.cartazFilmes {
  margin: 0 10px;
  height: 320px;
  margin-top: 30px;
  
  

}
.cartazFilmes:hover{
  transform: scale(1.07);
  transition: 0.4s;
}
.offcanvas-header{
  background-color: rgb(1, 3, 24) ;
}
.offcanvas{
  background-color:rgb(0, 3, 34) ;
  color: white;

}
::-webkit-scrollbar {
  width: 8px;
  border-radius: 40%;
}

::-webkit-scrollbar-track {  
  /* border-radius: 0; */
  background: rgb(39, 0, 90);
}

::-webkit-scrollbar-thumb {
  /* border-radius: 0; */
  background: rgb(159, 43, 226);
  border-radius: 15px;
  width: 5%;
} 
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
  font-size: 25px;
  justify-content: center;
  padding: 5%;
  
}

.genre-item {
 
  border: solid 2px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  color: #fff;
}

.genre-item:hover {
  color: white;
  cursor: pointer;
  transition: 0.5s;
  background-color: #8c4ffd;
  
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