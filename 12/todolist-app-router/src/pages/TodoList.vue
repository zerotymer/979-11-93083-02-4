<template>
  <div class="row">
    <div class="col p-3">
      <router-link class="btn btn-primary" :to="{ name: 'todos.add' }" >할일 추가</router-link>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoItem v-for="(item, index) in todolist" :key="item.id" v-bind="item" />
      </ul>
    </div>
  </div>
</template>


<script setup>
import { inject } from 'vue'
import TodoItem from '@/components/TodoItem.vue'

/// region data, state, inject
const todolist = inject('todolist')
/// endregion

</script>