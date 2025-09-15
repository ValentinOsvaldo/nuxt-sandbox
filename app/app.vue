<script setup lang="ts">
await callOnce(() => {
  console.log('Authenticating...');
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
