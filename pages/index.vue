<template>
  <div>
    <h2>這是 index 頁</h2>
    <nuxt-link to="/about">about 頁</nuxt-link><br>
    <nuxt-link to="/category/666">category 參數頁</nuxt-link><br>
    <nuxt-link to="/fetchData">fetchData 頁</nuxt-link><br>
    <nuxt-link to="/useAsyncData">useAsyncData 頁</nuxt-link><br>
    <nuxt-link to="/useFetch">useFetch 頁</nuxt-link><br>
    <Test />
  </div>
</template>

<script setup>
// 直接定義在頁面中的 middleware
definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    console.log(`[匿名中間件] 我是在 index 頁的 middleware`);
  })
});

// 引入在 middleware 中定義的方法使用
// 可使用陣列引入多個方法，將依序執行
// definePageMeta({
//   middleware: ['定義在 middleware 資料夾內的方法']
// });
</script>