declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiUrl: string
  }
  interface PublicRuntimeConfig {
    apiUrl: string
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
