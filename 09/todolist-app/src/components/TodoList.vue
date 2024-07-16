<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem v-for="item in list" :key="item.id" 
                    v-bind="item"
                    @delete-todo="$emit('delete-todo', $event)"
                    @toggle-todo="$emit('toggle-todo', $event)"/>
            </ul>
        </div>
    </div>
</template>


<script>
import TodoListItem from './TodoListItem.vue';

export default {
    name: 'TodoList',
    components: { TodoListItem },
    props: { list: { type: Array, required: true} }, 
    emits: [ 'delete-todo', 'toggle-todo' ],
}
</script>
