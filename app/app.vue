<script setup lang="ts">
const authStore = useAuthStore();

// watch(
//   () => authStore.authState,
//   (newValue) => {
//     if (newValue === 'authenticated') {
//       navigateTo('/');
//     } else if (newValue === 'not-authenticated') {
//       navigateTo('/login');
//     }
//   }
// );

const subscription = authStore.$subscribe(async (mutation, state) => {
  if (state.authState === 'authenticated') {
    navigateTo('/');
  } else if (state.authState === 'not-authenticated') {
    navigateTo('/login');
  }
});

onUnmounted(() => {
  subscription();
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <FullLoaderScreen v-if="authStore.authState === 'checking'" />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
