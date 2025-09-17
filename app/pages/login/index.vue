<script setup lang="ts">
const authStore = useAuthStore();

const email = ref('test1@gmail.com');
const password = ref('Zapata1965!');

async function onLogin() {
  await authStore.login(email.value, password.value);
}

definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <form @submit.prevent="onLogin">
      <h1>Login</h1>

      <UInput v-model="email" label="Email" />
      <UInput v-model="password" label="Password" type="password" />

      <UButton type="submit">Login</UButton>
    </form>
  </div>
</template>
