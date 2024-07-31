<template>
  <li class="list-group-item" :class="{ 'list-group-item-success' : done }"
    @click.stop="toggleTodo(id)">
    <span class="pointer" :class="todo-done">
      {{ todo }}
      {{ done ? '(완료)' : '' }}
    </span>
    <span class="float-end badge bg-secondary pointer m-1" 
      @click.stop="router.push({ name: 'todos.edit', params: { id }})">
      편집
    </span>
    <span class="float-end badge bg-secondary pointer m-1"
      @click.stop="deleteTodo(id)">
      삭제
    </span>
  </li>
</template>


<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router'

/// region data, state, props, inject
const router = useRouter()
const props = defineProps({
  id: { type: Number, required: true },
  todo: { type: String, required: true },
  desc: { type: String, required: false, default: '' },
  done: { type: Boolean, required: false, default: false }
})
const { deleteTodo, toggleTodo } = inject('actions')
/// endregion
</script>