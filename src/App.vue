<template>
  <PageMembers />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    PageMembers: defineAsyncComponent(() =>
      import(/* webpackChunkName: "pageMembers" */ '@/pages/PageMembers.vue')
    ),
  },
};
</script>
