<template>
  <div class="header-container">
    <header class="header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">WD BLOG</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '~/components/navigation/TheSideNavToggle';

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.header-container {
  height: 60px;

  .header {
    width: 100%;
    position: fixed;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: black;
    z-index: 100;
    box-sizing: border-box;
    padding: 0 20px;

    .logo {
      margin: 0 10px;
      font-size: 1.3rem;

      a {
        text-decoration: none;
        color: white;
      }
    }

    .spacer {
      flex: 1;
    }

    .navigation-items {
      display: none;

      .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;

        .nav-item {
          margin: 0 10px;

          a {
            text-decoration: none;
            color: white;
          }

          a:hover,
          a:active,
          a.nuxt-link-active {
            color: red;
          }
        }
      }
    }

    @media (min-width: 768px) {
      .navigation-items {
        display: block;
      }
    }
  }
}
</style>
