// 可透過 getRouterParam 取得路由參數並將它使用於顯示資料
export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');
  return `Hey ${name} !`;
});