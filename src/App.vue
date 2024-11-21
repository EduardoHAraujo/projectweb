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

.sidebar[data-v-1fbabfaf] {
  height: 95.5%;
}

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
  padding: 0px;
  background-color: #f4f4f4;
}

</style>
