<template>
    <li class="list-group-item"
        :class="{ 'list-group-item-success': completed }"
        @click="emitter.emit('toggle-todo', id)">
        <span @click.stop="emitter.emit('toggle-todo', id)">{{ content }}</span>
        <button @click.stop="emitter.emit('delete-todo', id)">삭제</button>
    </li>
</template>


<script>
export default {
    name: 'TodoListItem',
    components: {},
    data: () => ({}),
    props: { 
        id: { required: true },
        content: { type: String, default: 'Null' }, 
        completed: { type: Boolean, default: false }
    },
    emits: [ 'delete-todo', 'toggle-todo' ]
}
</script>
