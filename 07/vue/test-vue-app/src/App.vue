<template>
  <div>
    <h2>관심있는 K-POP 가수</h2>
    <hr />
    <ul>
      <CheckboxItem 
        v-for="item in idols" 
        :key="item.id"
        v-bind="item" />
    </ul>
  </div>
</template>


<script>
import CheckboxItem from './components/CheckboxItem.vue';

export default {
  name: 'App',
  components: { CheckboxItem },
  data: () => ({
    idols: [
      { id: 1, name: "BTS", checked: true },
      { id: 2, name: "Blafk Pink", checked: false },
      { id: 3, name: "EXO", checked: false },
      { id: 4, name: "ITZY", checked: false },
    ]
  })
};
</script>