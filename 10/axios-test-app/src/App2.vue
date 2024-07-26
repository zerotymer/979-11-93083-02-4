<template>
    <div>
      <h2>콘솔을 확인합니다.</h2>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios'
  
  const listUrl = '/api/todolist_long/gdhong'
  const todoUrlPrefix = '/api/todolist_long/gdhong/'
  
  const requestAPI = async () => {
    let todoList = []

    let response = await axios.get(listUrl)
    todoList = response.data
    console.log('# TodoList: ', todoList)
    for (const [idx, todo] of todoList.entries()) {
        response = await axios.get(todoUrlPrefix + todo.id)
        console.log(`## ${ idx + 1 }번째 Todo: `, response.data)
    }
  }
  
  requestAPI()
  </script>