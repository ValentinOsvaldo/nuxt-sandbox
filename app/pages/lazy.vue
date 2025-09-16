<script setup lang="ts">
const showCard = useState('show-card', () => false);

useSeoMeta({
  title: 'Lazy components',
});
</script>

<template>
  <section class="p-4">
    <USwitch v-model="showCard" label="Show user card" />

    <div class="grid grid-cols-3 mt-4">
      <Transition>
        <UserCard v-if="showCard" />
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
