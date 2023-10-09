<script setup>
</script>

<template>
    <div class="row">
      <div v-for="(pagamento) in pagamentos" :key="pagamento.id" class="tema col-3">
        <h2>{{ pagamento.id }} - {{ pagamento.nome }}</h2>

        <br />
        <h6>Preço: R${{ pagamento.preco }}</h6>
        <router-link class="button" :to="`/alugar/${pagamento.id}`">Alugar</router-link>
      </div>
    </div>
</template>

<style scoped>
</style>