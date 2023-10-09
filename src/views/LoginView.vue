<script setup>
// import HeaderStreamHub from '@/components/HeaderStreamHub.vue';

</script>

<template>
    <h1 class="titulo">Entrar</h1>
  <div class="login">
    <form class="login2">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label pergunta">Você tem uma conta no StreamHub?</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">  
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
    <div class="container">
        <div class="row">
            <div class="col-1">
                <router-link class="btn" id="linkBotao" :to="{name: 'Inicio'}">Entrar</router-link>
            </div>
            <div class="col-1 esqueceu">
                <a href="#" class="btn2">Esqueceu a senha?</a>
            </div>
        </div>
    </div>
    <p id="texto-ajuda">Qualquer dúvida contate o suporte</p>
</form>
</div>
</template>

<style scoped>
.pergunta{
    width: 20rem;
}
.titulo{
    margin-left: 47.5%;
    margin-top: 2%;
    color: white;
    font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
}
.login{
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    margin-left: 20%;
    margin-top: 2%;
    margin-bottom: 6.3%; 
    border: solid 2px;
    border-radius: 12px;
    padding: 30px;
    height: 26rem;
    width: 70rem;
    color: white;
    font-family: 'Anek Malayalam', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Lexend', sans-serif;
  background: rgb(1,3,24);
background: linear-gradient(151deg, rgba(1,3,24,0.9) 16%, rgba(1,8,37,0.8) 40%, rgba(2,10,60,0.8) 63%, rgba(3,22,77,0.8) 85%);
}

.form-control{
    background-color: transparent;
    border: solid 1px;
    color: white;
    margin-bottom: 2.5%;
    height: 3.5rem;
    
}

.form-label{
    margin-right: 76%;
    color: white;
    font-size: 15px;
}

.btn{
    background: rgb(1,3,150);
background: linear-gradient(151deg, rgba(1,3,150,0.8) 0%, rgba(2,10,60,1) 100%);
    color: white;
    width: 9rem;
    height: 2.8rem;
    


}

.btn:hover{
    background: transparent;
    border: solid 2px;
    border-radius: 7%;
}

.btn2{
    color: rgb(83, 83, 255);
    font-size: 15px;
    margin-top: 3%;
    
    
    
}

.col-1{
    margin-right: 3%;
    width: 15%;
    
}

.esqueceu{
    margin-top: 1%;
    width: 11rem;
}
#texto-ajuda{
    margin-right: 70%;
    margin-top: 5%;
}





</style>