<template>
    <li>
        <input type="checkbox" :checked="checked" />{{ name }}
    </li>
</template>

<script>
    export default {
        name: 'CheckboxItem',
        props: ['name', 'checked'],
        // created: function() {
        //     this.checked = true;
        // }
    }
</script>

<style scoped>

</style>