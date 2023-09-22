<script setup>
import HeaderStreamHub from './components/HeaderStreamHub.vue'
import FooterStreamHub from './components/FooterStreamHub.vue'
</script>

<template>
  <HeaderStreamHub />
  <RouterView></RouterView>
  <FooterStreamHub />
</template>

<style scoped>
</style>
