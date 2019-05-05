<template>
  <Page title="Processo">
    <b-container class="row">
      <b-row>
        <b-col sm="8">
          <h2>Sobre o processo de inovação</h2>
          <hr>
          <p>
            O projeto segue o Processo de Inovação CESAR que tem base nos princípios
            de design centrado no usuário. A primeira etapa é a de <b>Estudos e Pesquisa</b>,
            onde é realizado estudo da literatura e pesquisas quantitativas e qualitativas
            para entender o perfil e necessidades do público-alvo e identificar oportunidades
            para inovação. A segunda etapa é a de <b>Ideação</b>, onde são geradas as
            soluções baseadas no que foi estudado nas pesquisas anteriores, a partir
            de técnicas diversificadas de brainstorm.<br><br>
            Logo após vem a etapa de
            <b>Prototipação</b>, onde é realizada a produção de alternativas de
            artefatos ou experiências através de protótipos em
            níveis crescentes de fidelidade, desde protótipo em papel, até
            completamente funcionais. Por fim, chega a etapa de <b>Avaliação</b>,
            onde é realizada a execução e análise dos testes dos protótipos
            com os usuários, com o objetivo de antecipar problemas e adequar o protótipo.
          </p><br><br>
        </b-col>
        <b-col sm="4">
          <img class="process" src="../assets/processo.png" alt="Processo de Inovação">
        </b-col>
      </b-row>
      <b-row>
        <h2>Diagrama de processos</h2>
        <hr class="line">
        <img src="../assets/Workflow.png" class="workflow-img" alt="Workflow da equipe">
      </b-row>
    </b-container>
  </Page>
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
.process {
  width: 320px;
  display: block;
  margin: 2% auto;
}

.line {
  width: 100%;
  margin-top: 0.5em;
  border: 0.5 solid grey;
}

.workflow-img {
  display: block;
  margin: 50px auto;
}
</style>
