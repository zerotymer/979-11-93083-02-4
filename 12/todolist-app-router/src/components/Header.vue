<template>
  <div class="header">
    <ul>
      <li>TodoList App</li>
      <li v-for="(menu, index) in menus" :key="menu.name">
        <router-link :to="createNamedRoute(menu)" :text="menu.description" />
      </li>
    </ul>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
import router, { routes, createNamedRoute } from '../router'

const menus = routes.filter(r => r.menu)

/// region methods

/// endregion
</script>


<style scoped>
div.header { background-color: white; }
div.header > ul { display: flex; flex-direction: row; }
div.header li { list-style: none; border: 1px solid lightgray; padding: 4px; }
div.header li > a { color: darkgray; }
</style>