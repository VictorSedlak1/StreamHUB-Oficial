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
</template>

<style scoped>
.navbar{
  background-color: rgb(1, 2, 19);

}

.navbar button{
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'Lexend', sans-serif;
  font-size: 15px;
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
  background: white;
  transition: 0.5s;
  color: rgb(0, 0, 0);
  
  
}
.btn-2{
  border-radius: 60px;
  background-color: rgb(35, 45, 175);
  border-color: rgb(35, 45, 175);
  
  
}

.text-color{
  color:  white;
}
</style>