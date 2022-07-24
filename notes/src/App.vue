<template>
 <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'Notes', params: {name: 'Notes'}}">Notes</router-link> |  
  </nav>


<router-view/>

<Footer></Footer>

</template>

<script>
import Notes from "./components/Notes";
import Footer from '@/components/Footer';

export default{
name: 'App',
components: {Notes, Footer},
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

nav a.router-link-exact-active {
  color: blueviolet;
}

</style>
