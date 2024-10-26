<template>
  <div>
    <h2>取得 server api 中的資料</h2>
    <p>方法：fetch</p>
    <p>回傳：{{ data }}</p>
  </div>
</template>

<script setup>
// 單純使用 $fetch 方法取得 api 資料可能會遇到以下問題
// 因為 Nuxt 的通用渲染，所以在伺服器渲染時會先去請求一次，等客戶端渲染時又會被請求一次
const data = await $fetch('/api/fetch');
</script>