<template>
  <div>
    <h1>這是 category 頁傳入的參數：{{ id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;
</script>