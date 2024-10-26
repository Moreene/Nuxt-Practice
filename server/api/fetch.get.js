export default defineEventHandler(() => {
  console.log('接收到 API 請求 /api/fetch');

  return {
    name: 'Moreene',
    dog: '贊贊',
    dogAge: '8 歲'
  };
});