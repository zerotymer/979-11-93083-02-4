<template>
  <div>
    <h2>관심있는 K-POP 가수</h2>
    <hr />
    <ul>
      <CheckboxItem 
        v-for="item in idols" 
        :key="item.id"
        :item="item" />
    </ul>
  </div>
</template>


<script>
import CheckboxItem from './components/CheckboxItem3.vue';
import Idol from './Idol';

export default {
  name: 'App',
  components: { CheckboxItem },
  data: () => ({
    idols: [
      new Idol(1, "BTS", true ),
      new Idol(2, "Black Pink", false ),
      new Idol(3, "EXO", false ),
      new Idol(4, "ITZY", false ),
    ]
  })
};
</script>