<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>


<script setup>
import { ref, reactive, provide, inject, computed } from 'vue'
import Header from '@/components/Header.vue'


/// region pre-setup
/**
 * todo 객체를 생성하는 메서드
 * @param todo 할일
 * @param desc 설명
 * @param done 완료 여부
 * IEF, CLOSURE
 */
const createTodo = (function() {
  let index = 1
  return (todo, desc, done = false) => ({ id: index++, todo, desc, done })
})()
/// endregion

/// region state, data, provide
const states = reactive({
  todolist: [
    createTodo('ES6 학습', '설명1'),
    createTodo('React학습', '설명2'),
    createTodo('ContextAPI 학습', '설명3', true),
    createTodo('야구경기 관람', '설명4'),
  ]
})
/// endregion


/// region methods
const addTodo = (todo, desc) => states.todolist.push(createTodo(todo, desc))
const updateTodo = ({ id, todo, desc, done }) => {
  const index = states.todolist.findIndex(i => i.id === id)
  states.todolist[index] = { ...states.todolist[index], todo, desc, done }
}
const deleteTodo = (id) => {
  const index = states.todolist.findIndex(i => i.id === id)
  states.todolist.splice(index, 1)
}
const toggleTodo = (id, e) => {
  const index = states.todolist.findIndex(i => i.id === id)
  states.todolist[index].done = !states.todolist[index].done
}
/// endregion

provide('todolist', states.todolist)
provide('actions', { addTodo, updateTodo, deleteTodo, toggleTodo })
</script>