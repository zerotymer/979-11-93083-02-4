<template>
    <div class="row mb-3">
        <div class="col">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="할일을 여기에 입력!"
                    v-model.trim="todo"
                    @keyup.enter="addTodoHandler" />
                <button class="btn btn-primary input-group-addon" 
                    @click="addTodoHandler">입력</button>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
export default {
    name: 'InputTodo',
    emits: [ 'add-todo' ],
    setup: function(props, context) {

        /// data - state
        const todo = ref('')

        /// methods
        const addTodoHandler = () => {
            console.log('input', todo)
            if (todo.value && typeof(todo.value) === 'string' && todo.value.length > 2) {
                context.emit('add-todo', todo.value);
                todo.value = '';
            }
        }

        return { todo, addTodoHandler }
    }
}
</script>