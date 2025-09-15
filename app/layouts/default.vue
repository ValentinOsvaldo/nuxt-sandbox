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
  {
    label: 'Lazy components',
    to: '/lazy',
    icon: 'i-lucide-gauge',
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
