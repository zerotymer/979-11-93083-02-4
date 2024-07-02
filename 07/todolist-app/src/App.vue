<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo v-model:value="todo" @add-todo="addTodo" />
        <TodoList :list="list" 
          @delete-todo="deleteTodo" 
          @toggle-todo="toggleTodo" />
      </div>
    </div>    
  </div>
</template>



<script>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';

let seed = Date.now();
const createTodo = (content, completed = false) => ({ id: ++seed, content, completed });

export default {
  name: 'App',
  components: { InputTodo, TodoList },
  data: () => ({
    todo: '',
    list: [
      createTodo('자전거 타기'),
      createTodo('딸과 공원 산책', true),
      createTodo('일요일 애견 카페'),
      createTodo('Vue 원고 집필'),
    ]
  }),
  methods: {
    addTodo: function(content) {
      console.log('content: ', content);
      content.length > 2 && this.list.push(createTodo(content));
    },
    deleteTodo: function(id) {
      const index = this.list.findIndex( i => i.id === id);
      this.list.splice(index, 1);
    },
    toggleTodo: function(id) {
      const index = this.list.findIndex( i => i.id === id);
      this.list[index].completed = !this.list[index].completed;
    }
  },
}
</script>
