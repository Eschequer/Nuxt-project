<template>
  <div>
    <nuxt-link to="/" exact class="admin-main-page-link">Main Page</nuxt-link>
    <nuxt />
  </div>
</template>

<style scoped>
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

a {
  text-decoration: none;
  display: block;
  margin: 5px auto;
  padding: 5px;
  width: 200px;
  text-align: center;
  color: black;
  font-size: 1.2rem;
  border: 1px solid #000;
}
a:hover {
  background-color: lightgray;
}
</style>
