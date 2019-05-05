<template>
  <b-navbar toggleable="md" type="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/">
      <img src="@/assets/logo.png" alt="Sonar Cultural" class="logo">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav class="menu">
          <b-nav-item href="#/">Início</b-nav-item>
          <b-nav-item href="#/artefatos">Artefatos</b-nav-item>
          <b-nav-item href="#/calendario">Calendário</b-nav-item>
          <b-nav-item href="#/equipe">Equipe</b-nav-item>
          <b-nav-item-dropdown id="nav7_ddown" text="Como Trabalhamos" right>
            <b-dropdown-item href="#/processo">Processo</b-dropdown-item>
            <b-dropdown-item href="#/ferramentas">Ferramentas</b-dropdown-item>
            <b-dropdown-item href="#/papeis">Papéis e Responsabilidades</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#/produto">Produto</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.navbar {
  background-color: #4f4f4f;
}

.logo {
  width: 120px;
  margin-left: 25px;
}

.menu .nav-item {
  margin: 5px;
}

.menu a {
  color: white !important;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9em;
  font-weight: 300;
  text-transform: uppercase;
}

.menu a:hover {
  color: rgb(189, 184, 184) !important;
}

a.dropdown-item { color: #4f4f4f !important; }

.dropdown-item:active {
  background-color: #414042 !important;
}

</style>
