<script setup>
// import HeaderStreamHub from '@/components/HeaderStreamHub.vue';

</script>

<template>
  <div class="login">
    <form class="login2">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
</div>
</template>

<style scoped>

.login{
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    margin-left: 24.1%;
    margin-top: 8%;
    margin-bottom: 6.3%; 
    border: solid 5px;
    border-radius: 15px;
    padding: 30px;
    height: 30rem;
    width: 60rem;
    border-color: blue;
}

.form-control{
    background-color: transparent;
    border: solid 2px;
    border-color: blue;
}



</style>