<template>
  <div class="container_message">
    <h3 class="message">
      {{ message }}
    </h3>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Message",

  setup() {
    const store = useStore();
    return {
      /* state */
      message: computed(() => store.state.message),
    };
  },
};
</script>
