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
@font-face {
    font-family: 'xilosaxilosa';
    src: url('./assets/xilosa_.woff2') format('woff2'),
         url('./assets/xilosa_.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
