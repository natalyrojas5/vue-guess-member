<template>
  <ul class="member_options">
    <li v-for="{ name, id } in members" :key="id" @click="validate(id)">
      {{ name }}
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'MemberOptions',
  setup() {
    const store = useStore();

    return {
      members: computed(() => store.state.membersArr),
      validate: (id) => store.dispatch('validateMember', id),
    };
  },
};
</script>
