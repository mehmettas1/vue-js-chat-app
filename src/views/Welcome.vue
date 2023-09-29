<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpForm />
    <LoginForm />
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import LoginForm from "@/components/LoginForm.vue";

export default { 
  components: { SignUpForm, LoginForm },
  
  setup(props) {
    
  }
  
  };
</script>
<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;

  outline: none;
  color: #777;
  margin: 10px auto;
}
</style>
