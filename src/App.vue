<template>
  <div id="app">
    <div class="container">
      <MainSidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from './components/common/MainSidebar.vue';

export default {
  name: 'App',
  components: {
    MainSidebar,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 16px;
  background-color: #f4f4f4;
}
</style>
