<template>
  <div class="navbar navbar-expand-sm bg-dark navbar-dark">
    <span class="navbar-brand ps-2">TodoList App</span>
    <button class="navbar-toggler" type="button" @click="isNavShow = !isNavShow">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" :class="{ show: isNavShow }">
      <ul class="navbar-nav">
        <li v-for="(menu, index) in menus" :key="menu.name">
          <router-link class="nav-link" :to="createNamedRoute(menu)" :text="menu.description" />
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import router, { routes, createNamedRoute } from '../router'

const menus = routes.filter(r => r.menu)

/// region data
const isNavShow = ref(false)
/// endregion
</script>