<script setup>
</script>

<template>
  <nav class="navbar">
  <form class="container-fluid justify-content-start">
    <a class="navbar-brand" href="#">STREAMHUB</a>
    <button class="btn-1 " type="button">Entrar</button>
    <button class="btn-2 text-color" type="button">Assine Agora</button>
  </form>
</nav>

<div class="gratis">
  <video autoplay loop muted class="clipe-fundo">
  <source src="./imagensdocarousel3/cenamarvelcompleta.mp4" type="video/webm">
</video>
<div class="gratis2">
  <h1>divirta-se</h1>
  <h2>Teste gratuito de 15 dias</h2>
  <a href="#">Assine aqui</a>
  <h3>*Para continuar depois do teste o pagamento será solicitado</h3>
</div>
</div>



</template>

<style scoped>
.navbar{
  background-color: rgb(1, 2, 19);

}

.navbar button{
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.navbar a{
  font-family: 'Anek Malayalam', sans-serif;
font-family: 'IBM Plex Sans', sans-serif;
font-family: 'Lexend', sans-serif;
  font-size: 20px;
}


.navbar-brand{
  color: white;
  margin-right: 82%;
  font-size: 22px;
}

.btn-1{
background: transparent;
border: none;
margin-right: 1%;
color: white;

  
}

.btn-2:hover{
  background: rgb(255, 255, 255);
  transition: 0.5s;
  color: black;
  
  
}
.btn-2{
  border-radius: 60px;
  background-color: rgb(35, 45, 175);
  border-color: rgb(35, 45, 175);
  
  
}

.text-color{
  color:  white;
}

.video{
 opacity: 0.5;
}

.gratis{
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gratis2{
  text-align: center;
}

.gratis2 h1{
  font-size: 50px;
  color: rgb(35, 45, 175);
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.gratis2 h2{
  font-size: 35px;
  color: white;
  margin-bottom: 50px;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.gratis2 h3{
  font-size: 15px;
  color: white;
  margin-top: 30px;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.gratis2 a{
  font-size: 23px;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  padding: 15px 25px;
  border-radius: 50px;
  transition: 0.3s;

}

.gratis2 a:hover{
  background-color: white;
  color: black;
}

.clipe-fundo{
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}

@media (min-aspect-ratio:16/09) {
    .clipe-fundo{
      width: 100%;
      height: auto;
    }
}

@media (max-aspect-ratio:16/09){
    .clipe-fundo{
      width: auto;
      height: 100%;
    }
}







</style>