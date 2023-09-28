<script setup>
// import HeaderStreamHub from '@/components/HeaderStreamHub.vue';

</script>

<template>
  <div class="login">
    <form class="login2">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Você tem uma conta no StreamHub?</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">  
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
    <div class="container">
        <div class="row">
            <div class="col-1">
                <button type="submit" class="btn">Entrar</button>
            </div>
            <div class="col-1">
                <a href="#" class="btn2">Esqueceu a senha?</a>
            </div>
        </div>
    </div>
    
</form>
</div>
</template>

<style scoped>

.login{
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    margin-left: 20%;
    margin-top: 8%;
    margin-bottom: 6.3%; 
    border: solid 2px;
    border-radius: 12px;
    padding: 30px;
    height: 32rem;
    width: 70rem;
    color: white;
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
    background-color: rgb(48, 48, 170);
    color: white;
    width: 9rem;
    height: 2.8rem;
    


}

.btn2{
    color: rgb(83, 83, 255);
    font-size: 15px;
    
    
}





</style>