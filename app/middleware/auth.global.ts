export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const publicPaths = ['/login'];

  if (publicPaths.includes(to.path)) return;

  if (authStore.authState === 'not-authenticated') {
    return navigateTo('/login');
  }
});
