<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpForm/>
    <LoginForm/>

  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default { components: { SignUpForm,LoginForm } };
</script>
<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
