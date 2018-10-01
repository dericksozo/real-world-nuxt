<template>
  <div id="nav" class="nav">
    <nuxt-link to="/" class="brand">Vue World</nuxt-link>
    <nav>
      <nuxt-link to="/" class="nav-item">Events</nuxt-link>
      <nuxt-link to="/create" class="nav-item">Create an Event</nuxt-link>
      <nuxt-link v-if="!loggedIn" to="/login">Login / Sign Up</nuxt-link>
      <a v-else @click="logout">Log Out</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    loggedIn() {
      if (this.$store.state.user !== null) {
        return true
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userLogout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
