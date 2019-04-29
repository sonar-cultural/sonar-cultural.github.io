<template>
  <Page title="Processo">
    <b-container class="row">
      <b-row>
        <b-col sm="8">
          <p>
            <b>Scrum</b><br>
            Desde o início do projeto, estamos nos baseando no framework SCRUM,
            para desenvolvimento do projeto, de forma adaptada. Definimos nossa
            sprint como uma semana. A cada início de sprint realizamos o Sprint Planning,
            onde a equipe se reúne, define as atividades que devem entrar no planejamento
            semanal e aloca as pessoas que irão realizar. Realizamos também, sempre que possível,
            as Daily Meetings, onde os integrantes falam as atividades que estão fazendo e
            impedimentos, caso exista algum. Ao final da sprint, a equipe se reúne e discute
            as atividades que foram completadas e como foi a sprint, no Sprint Review. <br><br>
            <b>Matriz CSD</b><br>
            Assim que tivemos o primeiro contato com o cliente, utilizamos a ferramenta CSD
            (Certezas, Dúvidas e Suposições) para mapear os pontos de certezas e incertezas
            sobre o projeto. E a cada reunião ou pesquisa realizada, voltamos à matriz, para
            reajustar o que for necessário.<br><br>
            <b>Project Model Canvas</b><br>
            Iniciamos o desenvolvimento do PM Canvas para um melhor entendimento do problema
            e do projeto. Por falta de informações, estamos tendo dificuldade em definir os
            objetivos de forma mensurável.<br><br>

          </p>
        </b-col>
        <b-col sm="4">
          <img class="process" src="../assets/processo.png" alt="Processo de Inovação">
        </b-col>
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
  width: 350px;
  display: block;
  margin: 2% auto;
}
</style>
