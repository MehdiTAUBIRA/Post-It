<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Coding academy by Epitech session 2022
      <a href="https://www.coding-academy.fr" target="_blank" rel="noopener">check coding academy website</a>.
    </p>
    <h3>App made with the help of Tutos below</h3>
    <ul>
      
    </ul>
    <h3><a href="https://www.youtube.com/watch?v=aioepiq7Yuw" target="_blank" rel="noopener">Comment utiliser le router Vue.js 3</a>.</h3>
    <ul>
      
    </ul>
    <h3><a href="https://www.youtube.com/watch?v=K0_pkOPRu7E" target="_blank" rel="noopener">Use localStorage in a Vue App</a>.</h3>
    <ul>
     
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
</style>
