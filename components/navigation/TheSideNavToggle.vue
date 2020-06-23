<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar">123</div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped lang="scss">
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;

  .bar {
    width: 90%;
    height: 2px;
    background-color: white;
  }
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}
</style>
