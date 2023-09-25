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
  </form>
</template>

<script>
export default {};
</script>
<style></style>
