<script setup lang="ts">
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const postsQuery = await useFetch<Post[]>(
  'https://jsonplaceholder.typicode.com/posts/',
  {
    key: 'posts',
  }
);
const todosQuery = await useFetch<Todo[]>(
  'https://jsonplaceholder.typicode.com/todos/',
  {
    key: 'todos',
  }
);

async function refreshPosts() {
  await refreshNuxtData(['posts']);
}

async function refreshTodos() {
  await refreshNuxtData(['todos']);
}

async function refreshAll() {
  await refreshNuxtData();
}

useSeoMeta({
  title: 'useFetch',
});
</script>

<template>
  <UContainer class="p-4">
    <header class="mb-4 flex items-center gap-2">
      <UButton @click="refreshAll">Refetch all</UButton>
      <UButton variant="soft" @click="refreshPosts">Refetch posts</UButton>
      <UButton variant="soft" @click="refreshTodos">Refetch todos</UButton>
    </header>

    <section class="grid grid-cols-2 gap-4">
      <article>
        <div
          v-if="postsQuery.status.value === 'pending'"
          class="flex items-center justify-center mx-auto"
        >
          <UIcon name="i-lucide-loader" class="animate-spin size-12" />
        </div>
        <div v-else class="grid gap-4">
          <div>Posts</div>
          <UCard
            v-for="todo in postsQuery.data.value"
            :key="todo.id"
            variant="outline"
          >
            <template #header>
              {{ todo.title }}
            </template>

            {{ todo.body }}
          </UCard>
        </div>
      </article>
      <article>
        <div
          v-if="todosQuery.status.value === 'pending'"
          class="flex items-center justify-center mx-auto"
        >
          <UIcon name="i-lucide-loader" class="animate-spin size-12" />
        </div>
        <div v-else class="grid gap-4">
          <div>Todos</div>
          <UCard
            v-for="todo in todosQuery.data.value"
            :key="todo.id"
            variant="subtle"
          >
            <template #header>
              {{ todo.title }}
            </template>

            <p v-if="todo.completed">Completed</p>
            <p v-else>Not Completed</p>
          </UCard>
        </div>
      </article>
    </section>
  </UContainer>
</template>
