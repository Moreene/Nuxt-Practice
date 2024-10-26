<template>
  <div>
    <h2>取得 server api 中的資料</h2>
    <p>方法：useFetch</p>
    <p>請求狀態：{{ status }}</p>
    <p v-if="error">發生錯誤：{{ error }}</p>
    <p>回傳資料：</p>
    <p v-if="pending">資料處理中</p>
    <p v-else>{{ data }}</p>
    <button type="button" @click="refresh">重新取得資料</button>
  </div>
</template>

<script setup>
// 因 useAsyncData 與 fetch 常一併使用所以有了 useFetch 方法
// 會自動產生 key
// useFetch(url, options)
// options:參數
// - data:handler 回傳值，據響應式狀態
// - pending:表示 handler 是否還在處理中
// - refresh/execute:會是一個函式。當呼叫時就會再次執行 handler 內容
// - error:顯示 handler 執行時的錯誤或例外
// - ststue:資料狀態 idle、pending、success、error
// 其他:亦可傳入 useAsyncData 與 fetch 中所有的 options 參數
const { data, pending, refresh, error, status } = await useFetch('/api/fetch');
</script>