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
        <h2>Algumas das metodologias e dinâmicas utilizadas</h2>
        <hr class="line">
        <p>
            <b>Scrum</b><br>
            Scrum é uma metodologia ágil para gestão e planejamento de projetos de software.
            Desde o início do projeto, a equipe se baseia no framework SCRUM para desenvolvimento
            do projeto, de forma adaptada. Definimos nossa sprint como uma semana.
            A cada início de sprint é realizado o Sprint Planning,
            onde a equipe se reúne, define as atividades que devem entrar no planejamento
            semanal e aloca as pessoas que irão realizar. É realizado também, sempre que possível,
            as Daily Meetings, onde os integrantes falam as atividades que estão fazendo e
            impedimentos, caso exista algum. Ao final da sprint, a equipe se reúne e discute
            as atividades que foram completadas e como foi a sprint, no Sprint Review. <br><br>

            <b>Matriz CSD</b><br>
            É uma ferramenta iniciadora de projetos que funciona
            a partir de três questões fundamentais:<br><br>
            1. O que nós já sabemos a respeito?<br>
            2. Quais são as nossas hipóteses? (ou o que supomos saber?)<br>
            3. Quais perguntas poderiam ser feitas?<br><br>
            A Matriz, geralmente utilizada em grupo, permite criar um referencial visual
            para as respostas da equipe a essas três perguntas.
            A equipe utilizou a ferramenta desde o primeiro contato com o cliente
            para mapear os pontos de certezas e incertezas sobre o projeto.
            E a cada reunião ou pesquisa realizada, a equipe volta à matriz, para
            reajustar o que for necessário.<br><br>

            <b>Project Model Canvas</b><br>
            É uma metodologia robusta, porém simplista, de planejamento de projetos,
            que utiliza conceitos visuais da neurociência aliados a uma estrutura
            lógica de componentes que formam um plano de projeto.
            Tais componentes estão organizados em blocos de perguntas fundamentais
            (Por quê, O quê, Quem, Como, Quando e Quanto) integrados em consonância
            com a teoria que rege o gerenciamento de projetos.
            A equipe utilizou o PM Canvas para um melhor entendimento do problema
            e do planejamento do projeto.<br><br>
          </p>
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
</style>
