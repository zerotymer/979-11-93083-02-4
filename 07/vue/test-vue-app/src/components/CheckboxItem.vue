<template>
    <li>
        <input type="checkbox" v-model="checked" /> 옵션
    </li>
</template>

<script>
    export default {
        name: 'CheckboxItem',
        data: () => ({
            checked: false
        })
    }
</script>

<style scoped>

</style>