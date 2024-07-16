<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem v-for="item in list" :key="item.id" 
                    v-bind="item"
                    @delete-todo="emit('delete-todo', item.id)"
                    @toggle-todo="emit('toggle-todo', item.id)"/>
            </ul>
        </div>
    </div>
</template>


<script setup>
import TodoListItem from './TodoListItem.vue';

/// defines
const props = defineProps({ 
    list: { type: Array, required: true} 
}) 
const emit = defineEmits([ 'delete-todo', 'toggle-todo' ])

</script>
