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
export default {
    name: 'InputTodo',
    data: () => ({ todo: '' }),
    emits: [ 'add-todo' ],
    methods: {
        addTodoHandler: function() {
            if (this.todo && typeof(this.todo) === 'string' && this.todo.length > 2) {
                this.emitter.emit('add-todo', this.todo);
                this.todo = '';
            }
        }
    }
}
</script>