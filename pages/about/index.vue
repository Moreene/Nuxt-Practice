<template>
  <div>
    <h2>這是 about 頁!</h2>
    <select v-model="val">
      <option disabled value="請選擇要傳送的參數">請選擇要傳送的參數</option>
      <option value="100">100</option>
      <option value="200">200</option>
      <option value="300">300</option>
      <option value="400">400</option>
    </select>
    <br><br>
    <button type="button" @click="goNext" :disabled="val === '請選擇要傳送的參數'">傳送參數</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom-layout',
});

const router = useRouter();
const val = ref('請選擇要傳送的參數');

function goNext(){
  router.push(`/about/${val.value}`);
};
</script>