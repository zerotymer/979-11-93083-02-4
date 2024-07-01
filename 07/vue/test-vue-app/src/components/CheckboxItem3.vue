<template>
    <li>
        <input type="checkbox" :checked="item.checked" />{{ item.name }}
    </li>
</template>

<script>
    import Idol from '../Idol'
    export default {
        name: 'CheckboxItem3',
        props: {
            item: Idol
        }
    }
</script>

<style scoped>

</style>