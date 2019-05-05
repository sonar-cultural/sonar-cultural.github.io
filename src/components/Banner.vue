<template>
  <div class="banner">
    <div class="content">
      <h1>
        Somos uma iniciativa de resgate e
        valorização de culturas regionais do Brasil
      </h1>
      <a href="#/artefatos" class="button">Saiba mais!</a>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.banner {
  background-image: url('../assets/team.jpg');
  background-size: cover;
  background-position-y: top;
  background-attachment: fixed;
  height: 90vh;
  color: #fefefe;
  text-shadow: 3px 4px 6px #333;
  position: relative;
}

.content {
  width: 80%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 45%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 5%;
}

.content h1 {
  font-family: 'Roboto', sans-serif;
  text-align: left;
  font-size: 2.7em;
  margin: 0;
}

.button {
  text-align: left;
  float: left;
  margin: 20px auto;
  background-color: #ffc731;
  border: 1px #ffc731 solid;
  color: white;
  padding: 10px 20px;
  font-weight: 900;
  text-decoration: none;
  text-shadow: none;
}
</style>
