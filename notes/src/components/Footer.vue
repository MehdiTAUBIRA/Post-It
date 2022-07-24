<template>
  <footer>
    <span> My post-it app <a href="//coding-academy.fr">Coding academy</a> Paris Campus session 2022 </span>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>
  footer {
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;
    a {
      text-decoration: none;
      color: #546E7A;
    }
  }
</style>