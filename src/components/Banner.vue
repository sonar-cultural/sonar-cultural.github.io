<template>
  <div class="banner">
    <div class="content">
      <h1>
        Somos uma iniciativa de resgate e
        valorização de culturas regionais do Brasil.
      </h1>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.banner {
  background-image: url('../assets/banner.png');
  background-size: cover;
  background-position-y: top;
  background-attachment: fixed;
  height: 98vh;
  color: #fefefe;
  text-shadow: 3px 4px 6px #333;
  position: relative;
}

.content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 15%;
}

.content h1 {
  font-family: 'xilosaxilosa', sans-serif;
  font-size: 3.6em;
  margin: 0;
}
</style>
