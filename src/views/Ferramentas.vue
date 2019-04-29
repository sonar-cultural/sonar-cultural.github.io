<template>
  <Page title="Ferramentas">
    <b-container>
        <b-row>
          <b-col sm="2">
            <img src="../assets/drive.png" alt="Google Drive Icon">
          </b-col>
          <b-col sm="10">
            <h2>Google Drive</h2>
            <p>A suite de softwares de escritório do google, permite criação
              de documentos de texto, planilhas, apresentações entre outros.
            </p>
          </b-col>
        </b-row>
        <hr class="line"><br>
        <b-row>
          <b-col sm="2">
            <img src="../assets/git.png" alt="Git Icon">
          </b-col>
          <b-col sm="10">
            <h2>Git</h2>
            <p>Git é um dos vários Sistemas de Controle de Versão de arquivos.
              Através dele é possível desenvolver projetos na qual diversas
              pessoas podem contribuir simultaneamente no mesmo, editando e
              criando novos arquivos e permitindo que os mesmos possam existir
              sem o risco de suas alterações serem sobrescritas.
            </p>
          </b-col>
        </b-row>
        <hr class="line"><br>
        <b-row>
          <b-col sm="2">
            <img src="../assets/whatsapp.png" alt="WhatsApp Icon">
          </b-col>
          <b-col sm="10">
            <h2>WhatsApp</h2>
            <p>O WhatsApp consiste em um programa de mensagens instantâneas,
              permitindo a troca de mensagens de texto, documentos,
              imagens e arquivos de áudio.
            </p>
          </b-col>
        </b-row>
        <hr class="line"><br>
        <b-row>
          <b-col sm="2">
            <img src="../assets/trello.png" alt="Trello Icon">
          </b-col>
          <b-col sm="10">
            <h2>Trello</h2>
            <p>Ferramenta de colaboração que organiza os projetos em quadros,
            informando o que está sendo trabalhado, quem está trabalhando em quê,
            e onde algo está em um processo.
            </p>
          </b-col>
        </b-row>
        <hr class="line"><br>
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
img {
  width: 130px;
  display: block;
  margin: auto;
}

.line {
  border: 0.5px solid rgb(211, 211, 211);
}
</style>
