<template>
    <div>
        X: <input type="text" v-model.number="x" /><br />
        결과: {{ result }}
    </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name: 'Calc',
    setup: function(props, context) {
        const x = ref(0)
        const result = ref(0)
        watch(x, (value, oldValue) => {
            console.log(`${ oldValue } ==> ${ value }`)
            result.value = value * 2
        })

        return { x, result }
    }    
}
</script>