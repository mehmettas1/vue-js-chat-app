<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter send ..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
  </form>
</template>
<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    const { user } = getUser();
    const message = ref("");
    const handleSubmit = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        createAd: timestamp(),
      };
      console.log(chat);
      message.value = "";
    };
    return{message,handleSubmit}
  },
};
</script>

<style></style>
