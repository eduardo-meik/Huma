<template>
  <div class="h-100">
    <router-view />
    <color-switcher />
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';
import ColorSwitcher from './components/Common/ColorSwitcher';
import { getDirection } from './utils';

export default {
  name: 'App',
  components: {
    ColorSwitcher
  },
  setup() {
    onBeforeMount(() => {
      const direction = getDirection();
      if (direction.isRtl) {
        document.body.classList.add("rtl");
        document.dir = "rtl";
        document.body.classList.remove("ltr");
      } else {
        document.body.classList.add("ltr");
        document.dir = "ltr";
        document.body.classList.remove("rtl");
      }
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
