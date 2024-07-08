<template>
    <div>
        <h3>당신이 경험한 프론트 엔드 기술으?(네번째: Scoped slot)</h3>
        <CheckBoxList :items="items" @checked-change="CheckBoxChanged">
            <template v-slot:icon="p1">
                <i v-if="p1.checked" class="far fa-grin-beam"></i>
                <v v-else class="far fa-frown"></v>
            </template>
            <template v-slot:default="p2">
                <span v-if="p2.checked" style="color: blue; text-decoration: underline;">
                    <i>{{ p2.label }}</i>
                </span>
                <span v-else style="color: gray">{{ p2.label }}</span>
            </template>
        </CheckBoxList>
    </div>
</template>


<script>
import CheckBoxList from './CheckBoxList.vue';

export default {
    name: 'NamedSlotTest',
    components: { CheckBoxList },
    data: () => ({
        items: [
            { id: 'V', checked: true, label: 'Vue' },
            { id: 'A', checked: false, label: 'Angular' },
            { id: 'R', checked: false, label: 'React' },
            { id: 'S', checked: false, label: 'Svelte' },
        ]
    }),
    methods: {
        CheckBoxChanged: function(e) {
            let item = this.items.find( (item) => item.id === e.id );
            item.checked = e.checked;
        }
    }  
}
</script>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/fonta-awesome/5.14.0/css/all.min.css");
</style>