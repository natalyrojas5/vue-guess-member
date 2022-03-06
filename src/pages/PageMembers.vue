<template>
  <div class="app" :class="{ success: memberCorrect }">
    <div v-if="loading" class="content_main content_loading fade-in">
      <Loading />
    </div>

    <div
      class="content_main fade-in"
      v-else-if="!loading && membersArr.length > 0 && !showMember"
    >
      <Header />
      <Member :showMember="showMember" />
      <Opportunities />
      <Message v-if="showMessage" />
      <MemberOptions />
    </div>

    <div
      class="content_main fade-in"
      :class="{ show_member: showMember }"
      v-else-if="showMember"
    >
      <Member :showMember="showMember" />
      <Message v-if="showMessage" />
      <button class="btn btn_reset_game" @click="reset">Volver a jugar</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineAsyncComponent } from "vue";

export default {
  components: {
    Loading: defineAsyncComponent(() =>
      import(/* webpackChunkName: "loading" */ "@/components/Loading.vue")
    ),
    Header: defineAsyncComponent(() =>
      import(/* webpackChunkName: "header" */ "@/components/Header.vue")
    ),
    Member: defineAsyncComponent(() =>
      import(/* webpackChunkName: "member" */ "@/components/Member.vue")
    ),
    Opportunities: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "opportunities" */ "@/components/Opportunities.vue"
      )
    ),
    MemberOptions: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "memberOptions" */ "@/components/MemberOptions.vue"
      )
    ),
    Message: defineAsyncComponent(() =>
      import(/* webpackChunkName: "message" */ "@/components/Message.vue")
    ),
  },
  setup() {
    const store = useStore();

    const reset = () => {
      store.dispatch("mixMembersArray");
      store.dispatch("resetGame");
    };

    /* actions */
    store.dispatch("mixMembersArray");

    return {
      reset,
      /* state */
      loading: computed(() => store.state.loading),
      membersArr: computed(() => store.state.membersArr),
      showMember: computed(() => store.state.showMember),
      showMessage: computed(() => store.state.showMessage),
      memberCorrect: computed(() => store.state.memberCorrect),
    };
  },
};
</script>

<style lang="scss">
.content_main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content_loading {
  background-color: #13dcb8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
