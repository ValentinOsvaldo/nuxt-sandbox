<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

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

const users = ref([
  {
    label: 'Memo',
    id: '1',
  },
  {
    label: 'Andres',
    id: '2',
  },
  {
    label: 'Colin',
    id: '3',
  },
  {
    label: 'Hector',
    id: '4',
  },
]);

const schema = toTypedSchema(
  z.object({
    status: z
      .array(z.string())
      .min(1, 'El estado debe ser al menos de uno')
      .default([]),
    email: z.email().or(z.literal('')).optional().default(''),
    required: z.boolean().default(false),
    users: z.array(z.string()).default([]),
  })
);

const { defineField, errors, values, handleSubmit } = useForm({
  validationSchema: schema,
});

const [status, statusAttrs] = defineField('status');
const [email, emailAttrs] = defineField('email');
const [required, requiredAttrs] = defineField('required');
const [user, userAttrs] = defineField('users');

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

useSeoMeta({
  title: 'Form',
});
</script>

<template>
  <div class="flex items-center justify-center h-screen p-4">
    <form
      class="bg-elevated p-4 rounded-lg max-w-xl w-full grid gap-4"
      @submit.prevent="onSubmit"
    >
      <UFormField label="Correo" :error="errors.email">
        <UInput v-model="email" v-bind="emailAttrs" class="w-full" />
      </UFormField>

      <UFormField label="Estado" :error="errors.status" required>
        <UInputMenu
          v-model="status"
          v-bind="statusAttrs"
          multiple
          value-key="id"
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Usuario" :error="errors.users" required>
        <UInputMenu
          v-model="user"
          v-bind="userAttrs"
          multiple
          value-key="id"
          :items="users"
          class="w-full"
        />
      </UFormField>

      <USwitch
        v-model="required"
        v-bind="requiredAttrs"
        label="Marcas como requerido"
      />

      <pre>{{ values }}</pre>

      <UButton block type="submit"> Submit </UButton>
    </form>
  </div>
</template>
