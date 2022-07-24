<template>
  <div class="home">
    <img alt="logoPostIt" src="../assets/logoPostIt.png">
    <HelloWorld msg="Welcome to Your Notes App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
