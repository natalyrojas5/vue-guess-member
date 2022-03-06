<template>
  <div class="member">
    <div class="member_main_picture">
      <img v-if="!showMember" class="hidden-picture" :src="member.url_image" />
      <img v-if="showMember" :src="member.url_image" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Member",
  props: {
    showMember: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore();

    return {
      member: computed(() => store.state.member),
    };
  },
};
</script>

<style lang="scss" scoped>
.member_main_picture {
  background-color: #d84dd9;
  border-radius: 50%;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: auto;
  max-width: 150px;
  width: 155px;
  text-align: center;
  position: relative;
  img {
    height: 155px;
    position: absolute;

    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    &.hidden-picture {
      left: 0;
      filter: brightness(100);
    }
  }
}
</style>
