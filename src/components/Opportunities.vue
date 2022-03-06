<template>
  <p class="opportunities">
    Tienes <span>{{ opportunities }}</span> intentos
  </p>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Opportunities",
  setup() {
    const store = useStore();
    return {
      /* state */
      opportunities: computed(() => store.state.opportunities),
    };
  },
};
</script>
