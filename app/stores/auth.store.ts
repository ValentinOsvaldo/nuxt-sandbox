interface User {
  email: string;
  id: string;
  password: string;
  token: string;
}

export const useAuthStore = defineStore('auth', () => {
  const authState = ref<'checking' | 'authenticated' | 'not-authenticated'>(
    'checking'
  );

  const user = ref<null | User>(null);
  const runtimeConfig = useRuntimeConfig();
  const token = useCookie<string | null>('auth-token', {
    default: () => null,
    httpOnly: false,
    secure: import.meta.env.PROD,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
  });

  async function login(email: string, password: string) {
    authState.value = 'checking';
    try {
      const data: User = await $fetch('/api/auth/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
        baseURL: runtimeConfig.public.apiUrl,
      });
      authState.value = 'authenticated';
      user.value = data;
      token.value = data.token;
    } catch (error) {
      authState.value = 'not-authenticated';
      console.error(error);
    }
  }

  // function sleep() {
  //   return new Promise((resolve) => setTimeout(resolve, 5000));
  // }

  async function checkToken() {
    console.log(token.value);
    if (token.value) {
      authState.value = 'authenticated';
      return;
    }
    authState.value = 'not-authenticated';
  }

  function logout() {
    token.value = null;
  }

  return {
    // Props
    authState,
    user,
    // Methods
    login,
    logout,
    checkToken,
  };
});
