<template>
    <li>
        <input type="checkbox" :checked="item.checked" />{{ item.name }}
    </li>
</template>

<script>
    export default {
        name: 'CheckboxItem2',
        props: ['item'],
        created: function() {
            this.item.checked = true;
        }
    }
</script>

<style scoped>

</style>