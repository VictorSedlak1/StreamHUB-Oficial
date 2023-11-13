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



<header>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Séries</router-link>
      <router-link to="/">Home</router-link>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
    <nav>
      
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Séries</router-link>
      <router-link to="/">Home</router-link>
    </nav>
  </header>



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
  width: 500px;
  margin-right: 100px;
  margin-bottom: 20px;
  margin-right: 2000px;
}
.logos{
  width: 400px;
  margin-bottom: 20px;
}

.logos3{
  width: 700px;
  margin-bottom: 20px;
}

.position{
  position: absolute;
  margin-left: -200px;
  /* background-color: aqua; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  /* justify-content: center; */
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