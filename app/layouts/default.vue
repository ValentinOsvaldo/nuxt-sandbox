<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home',
  },
  {
    label: 'form',
    to: '/form',
    icon: 'i-lucide-rectangle-ellipsis',
  },
  {
    label: 'useFetch',
    to: '/fetch',
    icon: 'i-lucide-wifi',
  },
]);
</script>

<template>
  <div>
    <header>
      <UNavigationMenu :items="items" />
    </header>
    <slot />
  </div>
</template>
