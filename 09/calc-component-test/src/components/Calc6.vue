<template>
    <div>
        X: <input type="text" v-model.number="state.x" /><br />
        결과: {{ state.result }}
    </div>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
    name: 'Calc',
    setup: function(props, context) {
        const state = reactive({ x: 0, result: 0 })
        // watch(state, (value, oldValue) => {
        //     console.log(`${ oldValue.x } ==> ${ value.x }`)
        //     state.result = value.x * 2 // 직접 변경으로 한번 더 실행.
        // })
        watch(() => state.x, (value, oldValue) => {
            console.log(`${ oldValue } ==> ${ value }`)
            state.result = value * 2 // 직접 변경으로 한번 더 실행.
        })

        return { state }
    }    
}
</script>