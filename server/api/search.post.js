/* 
透過 getQuery 取得路由中的 query 參數
透過 readBody 取得 body 中的 payload(需使用async/await，因會回傳 promise)

使用 postman：
  -可在 body 中選擇 json 打上內容
  -可在路由中直接打 query 參數 
*/
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const body = await readBody(event);

  return {
    keyword: body.keyword,
    query
  };
});