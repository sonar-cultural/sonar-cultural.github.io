<template>
  <Page title="Artefatos">
    <!-- TRELLO -->
    <h2>Quadro de atividades do projeto</h2>
    <p>
      Quadro na ferramenta Trello que contém todas as atividades
      da equipe no projeto. As atividades são distribuídas por
      membro da equipe e todo o status é monitorado por lá.<br><br>
      <a href="http://bit.do/sonar-cultural" target="_blank">
        Quadro de atividades
      </a>
    </p><br>

    <!-- STATUS REPORT -->
    <h2>Apresentações de Status Report</h2>
    <p>
      Os status report avaliam o planejamento, execução, testes e
      análise de resultados do projeto. Temos 3 status report a cada
      projeto referentes às etapas de entedimento do problema, ideação
      e prototipação.<br><br>
      <a href="http://bit.do/sonar-cultura-kick-off" target="_blank">
        Kick Off
      </a><br>
      <a href="http://bit.do/status-1" target="_blank">
        Status Report 1
      </a><br>
    </p><br>

    <!-- OUTROS -->
    <h2>Outros</h2>
    <p>
      Alguns outros documentos que fazem parte do processo do projeto.
      <br><br>
      <a href="https://trello.com/b/eXJrOC4A/brainstorm" target="_blank">
        Quadro da Matriz CSD
      </a><br>
      <a href="http://bit.do/pmc-sonar" target="_blank">
       Project Model Canvas
      </a><br>
    </p><br>
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
