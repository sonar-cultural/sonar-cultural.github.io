<template>
  <main>
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <div class="content">
      <slot/>
    </div>
  </main>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
.header {
  background-color: #ffc731;
  color: white;
  padding: 50px;
}

.content {
  padding: 5% 10% 8%;
  text-align: justify;
  min-height: 75vh;
}

.content h2 {
  font-size: 1.3em;
}
</style>
