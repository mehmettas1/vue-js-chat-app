<template>
  <form>
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="E-mail" v-model="email" />
    <input
      type="password"
      required
      placeholder="password "
      v-model="password"
    />
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    return { displayName, email, password };
  },
};
</script>
<style></style>
