<script setup lang="ts">
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const { data: user, status } = await useFetch<User>(
  'https://jsonplaceholder.typicode.com/users/1'
);

console.log('PROCESO ULTRA PESADO')
</script>

<template>
  <USkeleton v-if="status === 'pending' || !user" />
  <UCard v-else variant="soft">
    <template #header>
      <h2>
        {{ user.name }}
      </h2>
    </template>

    <p>
      {{ user.address.street }}
    </p>

    <template #footer>
      <p>
        {{ user.website }}
      </p>
    </template>
  </UCard>
</template>
