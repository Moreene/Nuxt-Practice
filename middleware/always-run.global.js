// 全域的 middleware
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`[全域中間件] 不管在哪都印出這一行`)
});