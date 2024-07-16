<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <TodoList :list="state.list" 
          @delete-todo="deleteTodo" 
          @toggle-todo="toggleTodo" />
      </div>
    </div>    
  </div>
</template>



<script setup>
import { reactive, onMounted } from 'vue'
import InputTodo from './components/InputTodo.vue'
import TodoList from './components/TodoList.vue'

let seed = Date.now()
const createTodo = (content, completed = false) => ({ id: ++seed, content, completed })

/// data - state
const state = reactive({ list: [] })

/// mounted
onMounted(() => {
  state.list.push(createTodo('자전거 타기'))
  state.list.push(createTodo('딸과 공원 산책', true))
  state.list.push(createTodo('일요일 애견 카페'))
  state.list.push(createTodo('Vue 원고 집필'))
})

/// methods
const addTodo = (content) => {
  content.length > 2 && state.list.push(createTodo(content));
}
const deleteTodo = (id) => {
  console.log('delete', id)
  const index = state.list.findIndex( i => i.id === id);
  state.list.splice(index, 1);
}
const toggleTodo = (id) => {
  console.log('toggle', id)
  const index = state.list.findIndex( i => i.id === id);
  state.list[index].completed = !state.list[index].completed;
}
</script>
