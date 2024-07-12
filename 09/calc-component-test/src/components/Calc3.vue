<template>
    <div>
        X: <input type="text" v-model.number="x" /><br />
        Y: <input type="text" v-model.number="y" /><br />
        <button @click="calcAdd">계산</button><br />
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: 'Calc',
    setup: function(props, context) {
        const x = ref(10)
        const y = ref(20)
        const result = ref(30)

        const state = reactive({ x: 10, y: 20, result: 30})

        const calcAdd = () => state.result = state.x + state.y

        return { state, calcAdd }
    }    
}
</script>