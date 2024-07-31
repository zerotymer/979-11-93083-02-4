<template>
  <div class="row">
    <div class="col p-3">
      <h2>할일 추가</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="todo">할일 :</label>
        <input type="text" class="form-control" id="todo" v-model.trim="todo" />
      </div>
      <div class="form-group">
        <label htmlFor="desc">설명 :</label>
        <textarea rows="3" class="form-control" id="desc" v-model.trim="desc" />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary m-1" @click="addTodoHandler">추 가</button>
        <button type="button" class="btn btn-primary m-1" @click="router.push(route_todos)">취 소</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive, inject } from 'vue';
import { createRouter, useRouter } from 'vue-router'

/// region pre-define
const router = useRouter()
const todo = ref('')
const desc = ref('')
const { addTodo } = inject('actions')
const route_todos = { name: 'todos' }
/// endregion


/// region methods
const addTodoHandler = () => {
  // validation
  if (todo.value.length == 0) {
    window.alert('할일은 반드시 입력해야 합니다')
    return
  }

  addTodo(todo.value, desc.value, () => router.push(route_todos))
}
/// endregion

</script>