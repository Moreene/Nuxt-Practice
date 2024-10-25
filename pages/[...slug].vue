<template>
  <!-- 
    1. [...slug].vue 可當作 404 頁面使用
    2. [...slug] 所傳入的值皆會以陣列方式呈現
  -->
  <div>
    <h1 style="text-align: center;">這是 <span style="color: red;">404</span> 頁面</h1>
    <nuxt-link to="/" style="text-align: center;">返回首頁</nuxt-link>
  </div>
</template>

<script setup>
const event = useRequestEvent();
setResponseStatus(event, 404, 'Not Found!!!');
</script>