<template>
  <div class="row">
    <div class="col p-3">
      <h2>할일 수정</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="todo">할일 :</label>
        <input type="text" class="form-control" id="todo" v-model.trim="value.todo" />
      </div>
      <div class="form-group">
        <label htmlFor="desc">설명 :</label>
        <textarea rows="3" class="form-control" id="desc" v-model.trim="value.desc" />
      </div>
      <div class="form-group">
        <label htmlFor="done">완료여부 :</label>
        <input type="checkbox" id="done" v-model.trim="value.done" />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary m-1" @click="updateTodoHandler">수정</button>
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
const props = defineProps({
  id: { type: Number, required: true }
})
const id = Number.parseInt(props.id)
const todolist = inject('todolist')
let _value = todolist.find(i => i.id === id)
if (!_value) {
  window.alert('데이터가 없습니다.')
  router.push(route_todos)
}
const value = reactive({ ..._value})
const { updateTodo } = inject('actions')
const route_todos = { name: 'todos' }
/// endregion


/// region methods
const updateTodoHandler = () => {
  // validation
  if (value.todo.length == 0) {
    window.alert('할일은 반드시 입력해야 합니다')
    return
  }

  updateTodo(value)
  router.push(route_todos)
}
/// endregion

</script>