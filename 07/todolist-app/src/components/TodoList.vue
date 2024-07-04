<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem v-for="item in list" :key="item.id" 
                    v-bind="item" />
            </ul>
        </div>
    </div>
</template>


<script>
import TodoListItem from './TodoListItem.vue';

export default {
    name: 'TodoList',
    components: { TodoListItem },
    data: () => ({}),
    props: { list: { type: Array, required: true} }, 
    emits: [ 'delete-todo', 'toggle-todo' ],
}
</script>
