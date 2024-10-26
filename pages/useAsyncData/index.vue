<template>
  <div>
    <h2>取得 server api 中的資料</h2>
    <p>方法：useAsyncData</p>
    <p>回傳：{{ data }}</p>
  </div>
</template>

<script setup>
// 使用 useAsyncData 是透過非同步方式取得 api 資料
// useAsyncData(key, handler, options)
// key:資料標記，加入 Nuxt 的 payload中，一併回傳瀏覽器
//    - 當客戶端重複執行程式碼時會檢查傳入的 key 是否已存在 payload，若有，將直接取得資料而不用再次請求 api 資料
// handler:實作非同步請求資料
// options:參數
// - server:是否從 server 取得資料(預設 true)
// - lazy:渲染頁面是否因為 useAsyncData 而阻塞，直到請求完成後才繼續渲染(預設 false)
// - immediate:函式呼叫 handler 時立即觸發(預設 true)
// - default:設定資料預設值
// - transform:可傳入一個函數，用來加工 handler 回傳結果
// - pick:可在 handler 回傳物件時，只依需要的 key 產生新的資料物件
// - watch:可傳入一個陣列，用來關注 ref 或 reactive 響應式資料
// 解決使用 fetch 可能會呼叫兩次 api 情況
const { data } = await useAsyncData('key', () => $fetch('/api/fetch'));
</script>