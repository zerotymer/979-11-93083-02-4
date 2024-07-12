<template>
    <div>
        X: <input type="text" v-model.number="x" /><br />
        Y: <input type="text" v-model.number="y" /><br />
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name: 'Calc',
    setup: function(props, context) {
        const x = ref(10)
        const y = ref(20)
        const result = ref(30)

        // const calcAdd = () => result.value = x.value + y.value
        watch([x, y], ([valueX, valueY], [oldValueX, oldValueY]) => {
            valueX !== oldValueX && console.log(`X: ${ oldValueX } ==> ${ valueX }`)
            valueY !== oldValueY && console.log(`Y: ${ oldValueY } ==> ${ valueY }`)
            result.value = valueX + valueY
        })

        return { x, y, result }
    }    
}
</script>