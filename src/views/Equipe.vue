<template>
  <main>
    <Page title="Equipe">
      <b-container class="membro">
        <b-row>
          <b-col>
            <img src="../assets/anna.jpg" alt="Anna Gabriela">
            <p class="info">
              <b>Anna Gabriela</b><br>
              Ciência da Computação<br>
              <a class="social-icon" href="https://linkedin.com/in/annagabrielac" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/AnnaGabriela" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </p>
          </b-col>
          <b-col>
            <img src="../assets/tiago.jpg" alt="Tiago Jales">
            <p class="info">
              <b>Tiago Jales</b><br>
              Ciência da Computação<br>
              <a class="social-icon" href="https://linkedin.com/in/tiago-jales-118886121" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/tiagojales" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </p>
          </b-col>
          <b-col>
            <img src="../assets/wilson.jpg" alt="Wilson Rocha">
            <p class="info">
              <b>Wilson Rocha</b><br>
              Ciência da Computação<br>
              <a class="social-icon" href="https://linkedin.com/in/wilson-rocha-23b246133" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Sownatta" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </p>
          </b-col>
        </b-row><br>
        <b-row>
          <b-col>
            <img src="../assets/livia.jpg" alt="Lívia Pastichi">
            <p class="info">
              <b>Lívia Pastichi</b><br>
              Design<br>
              <a class="social-icon" href="https://linkedin.com/in/liviapastichi" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://behance.net/liviapastichi" target="_blank">
                <i class="fab fa-behance"></i>
              </a>
            </p>
          </b-col>
          <b-col>
            <img src="../assets/lucca.jpg" alt="Lucca Maida">
            <p class="info">
              <b>Lucca Maida</b><br>
              Design<br>
              <a class="social-icon" href="https://linkedin.com/in/lucca-maida-690874172" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </p>
          </b-col>
          <b-col>
            <img src="../assets/vivi.jpg" alt="Viviane Lins">
            <p class="info">
              <b>Viviane Lins</b><br>
              Design<br>
              <a class="social-icon" href="https://linkedin.com/in/vivianelins" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://behance.net/vivianelins" target="_blank">
                <i class="fab fa-behance"></i>
              </a>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </Page>
  </main>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  components: {
    Page,
  },
};
</script>

<style scoped>
.membro img {
  width: 200px;
  border-radius: 50%;
  display: block;
  margin: auto;
  webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.membro img:hover {
  webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
  transition: 1.3s;
}

.info {
  text-align: center;
  margin: 10px 0;
}

.social-icon {
  margin-left: 8px;
  font-size: 1.3em;
}
</style>
