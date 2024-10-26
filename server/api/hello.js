
/*
若是放在 api 資料夾底下的js，其 api 在請求時皆須加上: /api/XXXX
若是放在 routes 資料夾底下的 js，其 api 在請求時可以直接是: /XXXXX
若未指定請方法，get、post、put、delete...等方法都拿的到此 api
*/
export default defineEventHandler((event) => {
  return {
    hello: '這支 api 不管用什麼請求方法都可以取得喔!'
  };
});