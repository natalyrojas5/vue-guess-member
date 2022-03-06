<template>
  <div class="mb_5">
    <div class="loading"></div>
    <h1 class="title_loading">Cargando integrantes</h1>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.mb_5 {
  margin-bottom: 5rem;
}
.loading {
  animation: spin 1.2s linear infinite;
  border-radius: 50%;
  border: 12px solid #ffffff9e;
  border-left-color: #292d56;
  display: inline-block;
  height: 80px;
  width: 80px;
  text-align: center;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

.title_loading {
  color: #fff;
  font-size: 1.9rem;
  line-height: 2.3rem;
  text-transform: uppercase;
}
</style>
