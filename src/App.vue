<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a,
a:not(:visited),
a:visited {
  color: rgba(114, 68, 0, 0.548);
}

a:hover {
  color: rgba(99, 60, 1, 0.856) !important;
}
</style>
