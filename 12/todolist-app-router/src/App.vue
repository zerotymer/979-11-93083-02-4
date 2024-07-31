<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>


<script setup>
import { ref, reactive, provide, inject, computed } from 'vue'
import axios from 'axios'
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
const owner = 'gdhong'
const baseURL = '/api/todolist_long'
const api = axios.create({ baseURL })
// const states = reactive({
//   todolist: [
//     createTodo('ES6 학습', '설명1'),
//     createTodo('React학습', '설명2'),
//     createTodo('ContextAPI 학습', '설명3', true),
//     createTodo('야구경기 관람', '설명4'),
//   ]
// })
const states = reactive({ todolist: [] })
/// endregion


/// region methods
const errorCallback = (msg) => window.alert('오류가 발생하였습니다.\n' + msg)
const fetchTodos = async () => {
  const response = await api.get(`/${ owner }`).catch(errorCallback)
  if (response.status === 200) 
    states.todolist = response.data 
  else
    alert('조회 가능한 데이터가 없습니다.')
}
const addTodo = async(todo, desc, success) => {
  const data = { todo, desc }
  const response = await api.post(`/${ owner }`, data).catch(errorCallback)
  if (response && response.data.status === 'success') {
    states.todolist.push(createTodo(todo, desc))
    success && success()
  } else if (response) 
    window.alert(`Todo 추가 실패: ${ response.data.message }`)
}
const updateTodo = async ({ id, todo, desc, done }, success) => {
  const data = { id, todo, desc, done }
  const response = await api.put(`/${ owner }/${ id }`, data).catch(errorCallback)
  if (response && response.data.status === 'success') {
    const index = states.todolist.findIndex(i => i.id === id)
    states.todolist[index] = { ...states.todolist[index], todo, desc, done }
    success && success()
  } else if (response)
    window.alert(`Todo 수정 실패: ${ response.data.message }`)
}
const deleteTodo = async (id) => {
  const response = await api.delete(`/${ owner }/${ id }`).catch(errorCallback)
  if (response && response.data.status === 'success') {
    const index = states.todolist.findIndex(i => i.id === id)
    states.todolist.splice(index, 1)
  } else if (response)
    window.alert(`Todo 삭제 실패: ${ response.data.message }`)
}
const toggleTodo = async (id) => {
  const response = await api.put(`/${ owner }/${ id }/done`).catch(errorCallback)
  if (response && response.data.status === 'success') {
    const index = states.todolist.findIndex(i => i.id === id)
    states.todolist[index].done = !states.todolist[index].done
  } else if (response)
    window.alert(`Todo 완료 변경 실패: ${ response.data.message }`)
}
/// endregion

provide('todolist', computed(() => states.todolist))
provide('actions', { fetchTodos, addTodo, updateTodo, deleteTodo, toggleTodo })

fetchTodos()
</script>