<script setup lang="ts">
const items = ref([
  {
    label: 'Backlog',
    id: 'backlog',
  },
  {
    label: 'Todo',
    id: 'todo',
  },
  {
    label: 'In Progress',
    id: 'in_progress',
  },
  {
    label: 'Done',
    id: 'done',
  },
]);
const value = ref('');

useSeoMeta({
  title: 'Form',
});
</script>

<template>
  <div class="flex items-center justify-center h-screen p-4">
    <form class="bg-elevated p-4 rounded-lg max-w-xl w-full grid gap-2">
      <UFormField
        label="Status"
        description="We'll never share your email with anyone else."
        error="The status is required"
        required
      >
        <UInputMenu
          v-model="value"
          value-key="id"
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UButton block> Submit </UButton>
    </form>
  </div>
</template>
