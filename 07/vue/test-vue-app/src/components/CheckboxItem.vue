<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{ id }} - {{ name }}
    </li>
</template>

<script>
    export default {
        name: 'CheckboxItem',
        props: {
            id: [Number, String],
            name: { 
                validator: (value) => ( typeof(value) === 'string' && value.trim().length >= 4)
            },
            checked: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>

<style scoped>

</style>