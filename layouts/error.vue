<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <a href="/">Back to safety!</a>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
  margin: 5px;
  border: 1px solid #000;
  width: auto;
  display: inline-block;
  padding: 5px;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
