<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav" @click="$emit('close')">
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.sidenav-container {
  height: 100%;
  width: 100%;

  .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10000;
    position: fixed;
    top: 60px;
    left: 0;
    border: 5px solid;
  }

  .sidenav {
    height: 100%;
    width: 300px;
    background-color: white;
    z-index: 10000000;
    position: fixed;
    top: 60px;
    left: 0;
    box-sizing: border-box;
    padding: 30px;

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .nav-item {
        margin: 20px 0;

        a {
          text-decoration: none;
          color: black;
          font-size: 1.5rem;
        }

        a:hover,
        a:active {
          color: green;
        }
      }
    }
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 1.5s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }
}
</style>
