<script setup>
import HeaderStreamHub from './components/HeaderStreamHub.vue'
import FooterStreamHub from './components/FooterStreamHub.vue'
import Loading from './components/LoadingStreamHub.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const showPreloader = ref(false);
const router = useRouter();

router.beforeEach(() => {
  showPreloader.value = true; // Exibir o indicador de carregamento antes da mudança de página
});

router.afterEach(() => {
  setTimeout(() => {
    showPreloader.value = false; // Ocultar o indicador de carregamento após a transição de página
  }, 1500); // Defina um tempo limite para garantir que o indicador seja visível por um curto período
});

</script>

<template>
  <HeaderStreamHub />
  <router-view/>
  <Loading v-if="showpreloader"></Loading>
  <FooterStreamHub />
</template>

<style scoped>
</style>
