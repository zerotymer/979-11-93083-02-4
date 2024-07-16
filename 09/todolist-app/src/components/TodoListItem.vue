<template>
    <li class="list-group-item"
        :class="{ 'list-group-item-success': completed }"
        @click="emit('toggle-todo', id)">
        <span @click.stop="emit('toggle-todo', id)">{{ content }}</span>
        <button @click.stop="emit('delete-todo', id)">삭제</button>
    </li>
</template>


<script setup>
 /// defines
const props = defineProps({
    id: { required: true },
    content: { type: String, default: 'Null' }, 
    completed: { type: Boolean, default: false }
})
const emit = defineEmits([ 'delete-todo', 'toggle-todo' ])
</script>
