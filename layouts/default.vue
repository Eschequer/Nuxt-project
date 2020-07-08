<template>
  <div>
    <TheHeader @sidenavToggle="showSidenav = !showSidenav" />

    <TheSidenav :show="showSidenav" @close="showSidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader';
import TheSidenav from '~/components/navigation/TheSidenav';

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      showSidenav: false
    };
  }
};
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;

  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
