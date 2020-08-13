<template>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">Video-Voice</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/chat">Chat Room</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>About</em>
          </template>
          <b-dropdown-item to="Settings">Settings</b-dropdown-item>
          <b-dropdown-item href="#">About</b-dropdown-item>
             <b-dropdown-item href="https://github.com/QueennN">Github</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>