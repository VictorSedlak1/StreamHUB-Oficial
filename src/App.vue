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
  <source src="./components/videos/marvelcenasoficial.mp4" type="video/mp4">
</video>
<div class="gratis2">
  <h1>divirta-se</h1>
  <h2>Teste gratuito de 15 dias</h2>
  <a href="#">Assine aqui</a>
  <h3>*Para continuar depois do teste o pagamento será solicitado</h3>
</div>
</div>

<div>
  <h1 class="titulo-planos">
    Escolha seu plano Multitelas
  </h1>
</div>

<div class="container">
  <div class="row">
    <div class="col-1">
      <ul>
        <li>Aproveite em todos os seus dispositivos.</li>
      </ul>
    </div>
    <div class="col-1">
      <ul>
        <li>
          Chromecast e Airplay disponíveis. 
        </li>
      </ul>
      
    </div>
    <div class="col-1">
      <ul>
        <li>
          Assista em até 3 telas ao mesmo tempo. 
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-1">
      <ul>
        <li>Tenha conteúdo em alta definição, com qualidade 4K. </li>
      </ul>
    </div>
    <div class="col-1">
      <ul>
        <li>
          Baixe suas séries e filmes favoritos, assista onde e quando quiser.  
        </li>
      </ul>
      
    </div>
    <div class="col-1">
      <ul>
        <li>
          Crie até 5 perfis diferentes.
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col">
      <h1> 1 mês</h1>
      <h2>R$ 19,90</h2>
      <h3>plano básico</h3>
      <button>assine aqui</button>
    </div>
    <div class="col">
      <h1> 3 meses</h1>
      <h2> R$ 54,90</h2>
      <h3>Igual a R$ 18,30 por mês </h3>
      <button>assine aqui</button>
    </div>
    <div class="col">
      <h1> 12 meses</h1>
      <h2> R$ 199,90</h2>
      <h3>Igual a R$ 16,60 por mês </h3>
      <button>assine aqui</button>
    </div>
    
  </div>
</div>

<div class="titulo-antecipado">
  <h3>Necessário pagamento antecipado. Economia baseada no preço do plano multitelas anual comparado ao preço do plano multitelas mensal durante 12 meses, </h3>
  <h4>excluindo impostos. Termos se aplicam.</h4>
</div>

<div class="card text-center">
  <div class="card-header">
    STREAMHUB
  </div>
  <div class="card-body">
    <h5 class="card-title">Alguma dúvida? Entre em contato</h5>
    <p class="card-text">Dispostos a solucionar qualquer problema</p>
    <a href="#" class="link">Privacidade</a>
    <a href="#" class="link">Suporte</a>
    <a href="#" class="link">Perguntas frequentes</a>
    <a href="#" class="link">Termos de uso</a>
    <h3>©StreamHub direct media, America, LLC. Todos os direitos reservados. StreamHub é usado sob licença.</h3>
  </div>
  
</div>









</template>

<style scoped>

.card-text{
  font-size: 13px;
  margin-bottom: 2%;
}

.card-body h3 {
  font-size: 13px;
  margin-top: 3%;
}
.link{
  margin-left: 3%;
  margin-right: 3%;
  color: white;
  text-decoration: none;
}

.link:hover{
  color: rgb(156, 105, 250);
  transition: 0.5s;
}
.card{
  background-image: linear-gradient(rgb(1, 3, 24),rgb(3, 10, 97) 150%) ;
  color: white;
  font-family: 'Anek Malayalam', sans-serif;
font-family: 'IBM Plex Sans', sans-serif;
font-family: 'Lexend', sans-serif;
}

.titulo-antecipado h3{
  text-align: center;
  font-size: 12px;
  color: white;
  margin-top: 2%;

}

.titulo-antecipado h4{
  text-align: center;
  font-size: 12px;
  color: white;
}
.col-1{
  color: rgb(255, 255, 255);
  justify-content: center;
  width: 22%;
  text-align: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  
}
.titulo-planos{
  color: white;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 3%;
}

.lista{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
.col{
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient( rgb(3, 10, 97), rgb(2, 4, 32) 70%);
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  border-radius: 10px;
  height: 320px;
  width: auto;
}

.col h1{
  margin-top: 5%;
  font-size: 35px;
  font-family: 'Anek Malayalam', sans-serif;
font-family: 'IBM Plex Sans', sans-serif;
font-family: 'Lexend', sans-serif;
}

.col h2{
  margin-top: 5%;
  font-size: 50px;
  font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
}

.col h3{
  margin-top: 5%;
  font-size: 15px;
  font-family: 'Anek Malayalam', sans-serif;
font-family: 'IBM Plex Sans', sans-serif;
font-family: 'Lexend', sans-serif;
}

.col button{
  margin-top: 90px;
  border-radius: 20px;
  background-image: linear-gradient(45deg, rgb(113, 36, 255) 0,0001%, rgb(7, 12, 85)  );
  border-color: rgb(35, 45, 175);
  color: white;
  font-size: 25px;
  width: 90%;
  height: 16%;
  font-family: 'Anek Malayalam', sans-serif;
font-family: 'IBM Plex Sans', sans-serif;
font-family: 'Lexend', sans-serif;
}

.col button:hover{
  background-image: linear-gradient(45deg, rgb(27, 8, 63) 0,0001%, rgb(2, 5, 34)  ); 
  color: black;
  transition: 0.7s;
  color: white;
  border-color: rgb(120, 47, 255);

}


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

.planos{
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  
  align-items: center;
  justify-content: center;
  text-align: center;
}







</style>