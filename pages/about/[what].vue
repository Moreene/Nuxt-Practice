<template>
  <div>
    <h1>這是 about 頁傳入的參數：{{ what }}</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom-layout',
});

const route = useRoute();
const { what } = route.params;
</script>