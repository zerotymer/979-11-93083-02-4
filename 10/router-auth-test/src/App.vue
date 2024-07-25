<template>
  <div class="container">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/admins">Admins</router-link>
    </div>
    <hr />
    <div>
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>


<style>
.container { margin: 10px }
.container a { margin-right: 3px; }
</style>