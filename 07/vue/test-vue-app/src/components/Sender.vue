<template>
    <div style="border: solid 1px gray; margin: 5px; padding: 5px;">
        <h2>Sender</h2>
        <br />
        <button @click="sendMessage">이벤트 발신</button>
    </div>
</template>

<script>
    export default {
        name: 'Sender',
        methods: {
            sendMessage: function() {
                this.emitter.emit('message', 'Sender message');
            }
        }
    }
</script>
