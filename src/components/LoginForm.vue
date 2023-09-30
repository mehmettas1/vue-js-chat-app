<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="E-mail" v-model="email" />
    <input
      type="password"
      required
      placeholder="password "
      v-model="password"
    />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";


export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const {error,login} = useLogin()
    const handleSubmit = async() => {
      await login (email.value,password.value)
      if(!error.value){
        console.log('Login Success');
      }
    };
    return { email, password, handleSubmit };
  },
};
</script>
<style></style>
