<template>
    <div>
        X: <input type="text" v-model.number="state.x" /><br />
        Y: <input type="text" v-model.number="state.y" /><br />
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
    name: 'Calc',
    setup: function(props, context) {
        const state = reactive({ x: 10, y: 20, result: 30})

        const result = computed(() => (state.x + state.y))

        return { state, result }
    }    
}
</script>